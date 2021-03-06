import OJS from './ojs-client'
import 'dotenv/config'

const ojs = new OJS({
  endpoint: 'https://submit.jtrialerror.com/index.php/jote/api/v1',
  token: process.env.OJS_TOKEN,
})
describe('ojsClient', () => {
  it('should pull submissions', async () => {
    const submission = await ojs.submission(27)
    console.log(submission)
    expect(submission).toBeDefined()
  })
  it('should pull publications', async () => {
    const submission = await ojs.publications(27)
    console.log(submission)
    expect(submission).toBeDefined()
  })
  it('should pull specific publication', async () => {
    const submission = await ojs.publication(27, 27)
    console.log(submission)
    expect(submission).toBeDefined()
  })
})
