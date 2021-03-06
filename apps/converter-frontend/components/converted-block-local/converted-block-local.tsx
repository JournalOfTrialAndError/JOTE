import { Box, Button, Code, Header, Loader, Text } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { VFile } from 'vfile'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { FaClipboard, FaClipboardList } from 'react-icons/fa'
import { HStack } from '../stack/stack'
import shallow from 'zustand/shallow'
import { useStore } from '../../utils/store'
//import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

/* eslint-disable-next-line */
export interface ConvertedBlockLocalProps {
  input: ArrayBuffer
  converter: (
    input: ArrayBuffer,
    options: { [key: string]: any | any[] }
  ) => Promise<VFile>
  options?: { [key: string]: any | any[] }
}

export function ConvertedBlockLocal(props: ConvertedBlockLocalProps) {
  const { input, options = {}, converter } = props
  const [vfile, setVFile] = useState<VFile | null>(null)
  const [preamble] = useStore((state) => [state.preamble], shallow)
  const clipboard = useClipboard({ timeout: 2000 })

  if (preamble) {
    options['preamble'] = preamble
  }
  useEffect(() => {
    ;(async () => {
      setVFile(await converter(input, options))
    })()
  }, [input, preamble])

  return (
    <Box>
      {vfile && (
        <Button
          onClick={() =>
            fetch('/api/tex-to-pdf', { method: 'POST', body: String(vfile) })
              .then((res) => res.blob())
              .then((res) => {
                window.open(URL.createObjectURL(res))
              })
              .catch((e) => console.error(e))
          }
        >
          Try make pdf
        </Button>
      )}
      {/* eslint-disable-next-line*/}
      {/* @ts-ignore  */}
      {vfile?.messages && (
        <>
          <Header height="20">Images extracted from doc</Header>
          <Box>
            {vfile?.data?.images
              ? Object.entries(
                  vfile?.data?.images as { [key: string]: ArrayBuffer }
                ).map(([url, img]: [url: string, img: ArrayBuffer]) => {
                  const arrayBufferView = new Uint8Array(img)
                  const blob = new Blob([arrayBufferView], {
                    type: 'image/jpeg',
                  })
                  const urlCreator = window.URL || window.webkitURL
                  const imageUrl = urlCreator.createObjectURL(blob)
                  // eslint-disable-next-line
                  return (
                    <img
                      width="30%"
                      alt="alternative image"
                      src={imageUrl}
                      key={url}
                    />
                  )
                })
              : null}
          </Box>
        </>
      )}
      {vfile?.messages && (
        <>
          <Header height="20">Errors and warnings</Header>
          {vfile?.messages.map((message) => (
            <Text key={String(message)}>{String(message)} </Text>
          ))}
        </>
      )}
      {vfile ? (
        <Box
          sx={{
            overflow: 'scroll',
            maxHeight: '70vh',
            paddingBottom: 20,
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Button
            style={{
              position: 'absolute',
              marginTop: 20,
              marginRight: 10,
              marginBottom: -200,
            }}
            sx={{
              width: 100,
            }}
            onClick={() => clipboard.copy(String(vfile))}
          >
            <HStack spacing={5}>
              <FaClipboardList />
              <Text>{clipboard.copied ? 'Copied!' : 'Copy'}</Text>
            </HStack>
          </Button>
          <SyntaxHighlighter
            //wrapLines
            wrapLongLines
            language="latex"
            CodeTag={Code}
            //showInlineLineNumbers
            //     style={nord}
            //   maxW: '80%',
            //   maxH: 200,
            //   overflowX: 'auto',
            //   whiteSpace: 'pre-wrap',
          >
            {String(vfile)}
          </SyntaxHighlighter>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  )
}

export default ConvertedBlockLocal
