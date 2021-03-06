import {
  Container,
  Text,
  Loader,
  Box,
  TextInput,
  Textarea,
  InputWrapper,
  Paper,
  Button,
} from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useStore } from '../../utils/store'
import { paths, definitions } from 'ojs-client'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import shallow from 'zustand/shallow'
import { HStack, VStack } from '../stack/stack'
import { MetaItem } from './meta-item'

type PubTypes = keyof definitions['Publication']
export const PublicationData = (props: {
  pub: Exclude<
    paths['/submissions']['get']['responses']['200']['schema']['items'],
    undefined
  >[number]
  apiToken?: string
  items?: PubTypes[]
}) => {
  const { pub, apiToken, items } = props
  const url = pub.publications?.[0]?._href
  const [setPreamble] = useStore((state) => [state.setPreamble], shallow)

  const form = useForm({
    initialValues: {
      documentclassname: 'article',
      documentclassopt: 'twocolumn, authordate',
      title: '',
      keywordsabstract: '',
      abstract: '',
      runningauthor: '',
      jname: '',
      jyear: '2022',
      acknowledgments: '',

      funding: '',
      doi: '',
      jvolume: '',
      jpages: '',
      jissue: '',
      paperreceived: '',
      authors: [
        {
          givenName: '',
          familyName: '',
          affiliation: '',
          email: '',
          orcid: '',
        },
      ],
      paperaccepted: '',
      paperpublished: '',
      jwebsite: 'https://jtrialerror.com',
    },
  })

  const handleSubmit = (values: typeof form['values']) => {
    console.log(values)

    setPreamble(values)
  }

  // inital load does not give us that much data
  const { data, error } = useSWR(
    `/api/ojs/publication?url=${encodeURIComponent(
      url || ''
    )}&apiToken=${apiToken}`
  )
  // const { data: sub, error: suberror } = useSWR(
  //   `/api/ojs/submission?url=${encodeURIComponent(
  //     data?._href || ''
  //   )}&apiToken=${apiToken}`
  // )
  useEffect(() => {
    if (!data || form.values.title) return

    form.setValues({
      ...form.values,
      title: data.fullTitle.en_US,
      documentclassopt:
        form.values?.documentclassopt + ', ' + categories?.[pub?.sectionId],
      keywordsabstract: data?.keywords?.['en_US']?.join(', '),
      abstract: data.abstract?.en_US,
      runningauthor: data.authorsStringShort,
      authors: data.authors.reduce(
        (acc: typeof data.authors, curr: typeof data.authors[number]) => {
          acc.push({
            givenName: curr.givenName?.en_US,
            familyName: curr.familyName?.en_US,
            orcid: curr.orcid,
            email: curr.email,
            affiliation: curr.affiliation?.en_US,
          })
          return acc
        },
        []
      ),
      jname: 'Journal of Trial and Error',
      jyear: data.copyrightYear || '2022',
      doi: data['pub-id::doi'],
      jvolume: '2',
      jissue: '1',
      jpages: data.pages || '',
      paperreceived: pub.dateSubmitted || '',
      paperaccepted: '',
      funding: data?.supportingAgencies?.en_US || '',
      paperpublished: data.published || '',
    })
  }, [data])

  return (
    <>
      {error ? (
        <Text color="red">{JSON.stringify(error)}</Text>
      ) : !data ? (
        <Loader />
      ) : items ? (
        <Box>
          {items.map((item) => {
            if (!data[item]) return null
            return <MetaItem key={item} datakey={item} value={data[item]} />
          })}
        </Box>
      ) : (
        <VStack sx={{ alignItems: 'flex-start' }}>
          <Paper>
            <Text>{categories[data.sectionId]}</Text>
            <Text>{data['pub-id::doi']}</Text>
            <MetaItem datakey={'title'} value={data.title} />
            <MetaItem datakey={'authors'} value={data.authors} />
            <MetaItem datakey={'abstract'} value={data.abstract} />
            <MetaItem
              datakey={'citations'}
              value={data.citations}
              extra={data.citationsRaw}
            />
            <MetaItem datakey={'keywords'} value={data.keywords} />
            {/* {Object.entries(data).map((datum) => {
            const [key, value] = datum as [
              key: keyof definitions['Publication'],
              value: definitions['Publication'][keyof definitions['Publication']]
            ]

            return <MetaItem key={key} datakey={key} value={value} />
          })} */}
          </Paper>
          <Paper>
            <HStack>
              <TextInput
                label="documentclassopt"
                {...form.getInputProps('documentclassopt')}
              />
              <TextInput
                label="documentclassname"
                {...form.getInputProps('documentclassname')}
              />
            </HStack>
            <HStack>
              <TextInput label="title" {...form.getInputProps('title')} />
            </HStack>
            <VStack>
              {form?.values?.authors?.map((author, index) => {
                return (
                  <InputWrapper
                    label={`Author ${index + 1}`}
                    key={author.familyName}
                  >
                    <Paper
                      shadow="sm"
                      padding="md"
                      radius="md"
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                      }}
                    >
                      <HStack spacing={10}>
                        <TextInput
                          labelProps={{
                            style: { color: 'red', fontWeight: 'bold' },
                          }}
                          label="givenname"
                          value={author.givenName}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].givenName = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        ></TextInput>
                        <TextInput
                          label="familyname"
                          value={author.familyName}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].familyName = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        ></TextInput>
                      </HStack>
                      <HStack spacing={10}>
                        <TextInput
                          label="email"
                          value={author.email}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].email = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        ></TextInput>
                        <TextInput
                          label="orcid"
                          value={author.orcid}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].orcid = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        ></TextInput>
                        <TextInput
                          label="affil"
                          value={author.affiliation}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].affiliation = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        ></TextInput>
                      </HStack>
                    </Paper>
                  </InputWrapper>
                )
              })}

              <HStack sx={{ width: '100%' }}>
                <TextInput
                  label="running"
                  {...form.getInputProps('runningauthor')}
                  sx={{ width: '100%' }}
                />
              </HStack>
              <VStack sx={{ alignItems: 'flex-start' }}>
                <Textarea
                  label="abstract"
                  {...form.getInputProps('abstract')}
                ></Textarea>
                <TextInput
                  label="keywords"
                  {...form.getInputProps('keywordsabstract')}
                ></TextInput>
              </VStack>
              <HStack>
                <TextInput
                  label="year"
                  {...form.getInputProps('jyear')}
                ></TextInput>
              </HStack>

              <HStack>
                <Textarea
                  label="acknowledgments"
                  {...form.getInputProps('acknowledgments')}
                ></Textarea>
                <Textarea
                  label="funding"
                  {...form.getInputProps('funding')}
                ></Textarea>
              </HStack>
              <HStack>
                <TextInput
                  label="volume"
                  {...form.getInputProps('jvolume')}
                ></TextInput>
                <TextInput
                  label="issue"
                  {...form.getInputProps('jissue')}
                ></TextInput>
              </HStack>

              <HStack spacing={10} sx={{ flexWrap: 'wrap' }}>
                <TextInput
                  label="received"
                  {...form.getInputProps('paperreceived')}
                ></TextInput>
                <TextInput
                  label="accepted"
                  {...form.getInputProps('paperaccepted')}
                ></TextInput>
                <TextInput
                  label="published"
                  {...form.getInputProps('paperpublished')}
                ></TextInput>
              </HStack>
              <HStack>
                <TextInput
                  label="website"
                  {...form.getInputProps('jwebsite')}
                ></TextInput>
                <TextInput
                  label="doi"
                  {...form.getInputProps('doi')}
                ></TextInput>
              </HStack>
            </VStack>
          </Paper>
          <Button onClick={() => handleSubmit(form.values)}>
            Add data to template
          </Button>
        </VStack>
      )}
    </>
  )
}

export const categories = [
  '',
  'empirical',
  'meta',
  'reflection',
  'rga',
  'editorial',
]
