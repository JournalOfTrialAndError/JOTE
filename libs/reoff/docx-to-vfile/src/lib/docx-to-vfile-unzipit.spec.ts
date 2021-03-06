import { docxToVFile } from './docx-to-vfile-unzipit'
import fs from 'fs'
import path from 'path'

describe('reoffDocxToVfile', () => {
  const doc = fs.readFileSync(
    path.join(__dirname, '../../../reoff-parse/src/test/word-citation.docx')
  )
  const docimg = fs.readFileSync(
    path.join(__dirname, '..', 'fixtures', 'images.docx')
  )
  jest.setTimeout(10000)
  it('should work', async () => {
    const vfile = await docxToVFile(new Uint8Array(doc))
    fs.writeFileSync(path.join(__dirname, 'test'), String(vfile))
    expect(vfile).toMatchSnapshot()
  })
  it('should contain vfile with relations data object', async () => {
    const vfile = await docxToVFile(new Uint8Array(doc))
    fs.writeFileSync(path.join(__dirname, 'test'), String(vfile))
    expect(vfile.data.relations).toBeDefined()
  })
  it('should contain images', async () => {
    const vfile = await docxToVFile(new Uint8Array(docimg))
    // console.log(vfile)
    fs.writeFileSync(path.join(__dirname, 'testimg'), String(vfile))
    expect(vfile.data.images).toBeDefined()
  })
})
