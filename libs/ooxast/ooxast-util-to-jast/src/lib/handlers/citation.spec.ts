import { T, Text } from 'ooxast'
import { getCitationCSL } from './citation'
const mendeleyCitation: T = {
  type: 'element',
  name: 'w:instrText',
  attributes: {},
  children: [
    {
      type: 'text',
      value:
        'ADDIN CSL_CITATION {"citationItems":[{"id":"ITEM-1","itemData":{"DOI":"10.1007/s40732-020-00402-5","ISSN":"2163-3452","abstract":"With the objective of increasing the magnitude of treatment effects in behavioral health, there is steadily growing interest in tailoring assessments and interventions to better match individual needs. This aligns with the central idea that behavior can be adequately understood by considering the unique characteristics of the individual and context. Thus, data collected at an individual level provides critical evidence that can be used to inform health care decisions, improve treatment, or refine theories. Yet, the majority of research in behavioral health is based on group-level analyses. Recent developments in the field of single-case experimental design (SCED) has provided new opportunities to utilize individual data. The present article provides a state-of-the art overview regarding key aspects of SCED, including a historical background to why and how SCED emerged, declined, and recently reemerged as well as methodological aspects such as design issues, challenges related to reliability and validity of repeated observations, innovations in visual and statistical analyses of individual data, strategies to deal with missing values, methodology to examine effect size, and approaches to summarize data from a large number of SCEDs using multilevel models and meta-analyses of replication data. Finally, the article discusses key concerns and actions needed to move the field forward.","author":[{"dropping-particle":"","family":"Vlaeyen","given":"Johan W S","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Wicksell","given":"Rikard K","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Simons","given":"Laura E","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Gentili","given":"Charlotte","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"De","given":"Tamal Kumar","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Tate","given":"Robyn L","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Vohra","given":"Sunita","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Punja","given":"Salima","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Linton","given":"Steven J","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Sniehotta","given":"Falko F","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Onghena","given":"Patrick","non-dropping-particle":"","parse-names":false,"suffix":""}],"container-title":"The Psychological Record","id":"ITEM-1","issued":{"date-parts":[["2020"]]},"page":"659–670","title":"From Boulder to Stockholm in 70 years: Single case experimental designs in clinical research","type":"article-journal","volume":"70"},"uris":["http://www.mendeley.com/documents/?uuid=8cbc9455-1fec-45a0-9f79-1b3c919a9263"]}],"mendeley":{"formattedCitation":"(Vlaeyen et al., 2020)","plainTextFormattedCitation":"(Vlaeyen et al., 2020)","previouslyFormattedCitation":"(Vlaeyen et al., 2020)"},"properties":{"noteIndex":0},"schema":"https://github.com/citation-style-language/schema/raw/master/csl-citation.json"}',
    } as Text,
  ],
}

const multipleMendeleyCitations = {
  type: 'element',
  name: 'w:instrText',
  attributes: {},
  children: [
    {
      type: 'text',
      value:
        'ADDIN CSL_CITATION {"citationItems":[{"id":"ITEM-1","itemData":{"ISBN":"0191-5401(Print)","abstract":"Reports that in single-S, single-case, small-sample, or interrupted time-series research, a conflict exists regarding whether sampling errors of observations obtained during baseline or intervention are independent so that statistical procedures such as analysis of variance (ANOVA) and regression can be applied to the data. In the present study, observations from 101 baseline phases and 125 intervention phases were examined for autocorrelation. Data show that many single-S studies were based on data in which the autocorrelations tended to be larger than zero and were measured on samples for which the test for identifying a nonzero autocorrelation as significant had low power. Results question the recommendations made by B. E. Huitema (see record 1986-08129-001) that classical data analytic procedures can be employed for single-S studies. (PsycINFO Database Record (c) 2016 APA, all rights reserved)","author":[{"dropping-particle":"","family":"Busk","given":"Patricia L","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Marascuilo","given":"Leonard A","non-dropping-particle":"","parse-names":false,"suffix":""}],"container-title":"Behavioral Assessment","id":"ITEM-1","issue":"3","issued":{"date-parts":[["1988"]]},"page":"229-242","publisher":"Pergamon Press, Inc.","publisher-place":"US","title":"Autocorrelation in single-subject research: A counterargument to the myth of no autocorrelation.","type":"article-journal","volume":"10"},"uris":["http://www.mendeley.com/documents/?uuid=74f7e531-03b7-42a5-ac46-16097a467507"]},{"id":"ITEM-2","itemData":{"DOI":"10.1177/0145445513510931","ISBN":"0145-4455","ISSN":"15524167","PMID":"24235178","abstract":"A wide variety of effect sizes (ESs) has been used in the single-case design literature. Several researchers have \\" stress tested \\" these ESs by subjecting them to various degrees of problem data (e.g., autocorrelation, slope), resulting in the conditions by which different ESs can be considered valid. However, on the back end, few researchers have considered how prevalent and severe these problems are in extant data and as a result, how concerned applied researchers should be. The current study extracted and aggregated indicators of violations of normality and independence across four domains of educational study. Significant violations were found in total and across fields, including low levels of autocorrelation and moderate levels of absolute trend. These violations affect the selection and interpretation of ESs at the individual study level and for meta-analysis. Implications and recommendations are discussed.","author":[{"dropping-particle":"","family":"Solomon","given":"Benjamin George","non-dropping-particle":"","parse-names":false,"suffix":""}],"container-title":"Behavior Modification","id":"ITEM-2","issue":"4","issued":{"date-parts":[["2014"]]},"page":"477-496","title":"Violations of assumptions in school-based single-case data: Implications for the selection and interpretation of effect sizes","type":"article-journal","volume":"38"},"uris":["http://www.mendeley.com/documents/?uuid=11839ff2-3056-4ff3-ad43-e69b0a63d7f5"]},{"id":"ITEM-3","itemData":{"DOI":"https://doi.org/10.1006/anbe.1996.0077","ISSN":"0003-3472","abstract":"Data from behavioural studies are frequently non-normally distributed and cannot be analysed with traditional parametric statistics. Instead, behaviourists must rely on rank-transformation tests, which lose potentially valuable information present in the data. Recently, however, biologists in other disciplines have resolved similar statistical difficulties by using resampling methods. Results from Kruskal–Wallis non-parametric ANOVA and randomization tests were compared for two behavioural data sets. It was found that randomization tests were more powerful than Kruskal–Wallis, and could thus detect smaller effect sizes present in the data. In addition, the variance was calculated around theP-value at eight levels of replication ranging from 500 to 10000, to determine the optimal number of replications for the randomization test. The variance around theP-value decreased as the number of replications increased. TheP-value stabilized at 5000 replications, and thus it is recommended that at least 5000 replications be used for randomization tests on behavioural data.","author":[{"dropping-particle":"","family":"Adams","given":"Dean C","non-dropping-particle":"","parse-names":false,"suffix":""},{"dropping-particle":"","family":"Anthony","given":"Carl D","non-dropping-particle":"","parse-names":false,"suffix":""}],"container-title":"Animal Behaviour","id":"ITEM-3","issue":"4","issued":{"date-parts":[["1996"]]},"page":"733-738","title":"Using randomization techniques to analyse behavioural data","type":"article-journal","volume":"51"},"uris":["http://www.mendeley.com/documents/?uuid=7af2bb5e-1012-44cf-9930-577e677fe190"]},{"id":"ITEM-4","itemData":{"DOI":"10.1037/a0029312","ISBN":"1939-1463(Electronic);1082-989X(Print)","ISSN":"1939-1463","PMID":"22845874","abstract":"This article systematically reviews the research design and methodological characteristics of single-case experimental design (SCED) research published in peer-reviewed journals between 2000 and 2010. SCEDs provide researchers with a flexible and viable alternative to group designs with large sample sizes. However, methodological challenges have precluded widespread implementation and acceptance of the SCED as a viable complementary methodology to the predominant group design. This article includes a description of the research design, measurement, and analysis domains distinctive to the SCED; a discussion of the results within the framework of contemporary standards and guidelines in the field; and a presentation of updated benchmarks for key characteristics (e.g., baseline sampling, method of analysis), and overall, it provides researchers and reviewers with a resource for conducting and evaluating SCED research. The results of the systematic review of 409 studies suggest that recently published SCED research is largely in accordance with contemporary criteria for experimental quality. Analytic method emerged as an area of discord. Comparison of the findings of this review with historical estimates of the use of statistical analysis indicates an upward trend, but visual analysis remains the most common analytic method and also garners the most support among those entities providing SCED standards. Although consensus exists along key dimensions of single-case research design, and researchers appear to be practicing within these parameters, there remains a need for further evaluation of assessment and sampling techniques and data analytic methods.","author":[{"dropping-particle":"","family":"Smith","given":"Justin D.","non-dropping-particle":"","parse-names":false,"suffix":""}],"container-title":"Psychological Methods","id":"ITEM-4","issue":"4","issued":{"date-parts":[["2012"]]},"page":"510-550","title":"Single-case experimental designs: A systematic review of published research and current standards","type":"article-journal","volume":"17"},"uris":["http://www.mendeley.com/documents/?uuid=262394ee-ba03-418c-8487-7cc5f4ad196a"]}],"mendeley":{"formattedCitation":"(Adams & Anthony, 1996; Busk & Marascuilo, 1988; Smith, 2012; Solomon, 2014)","plainTextFormattedCitation":"(Adams & Anthony, 1996; Busk & Marascuilo, 1988; Smith, 2012; Solomon, 2014)","previouslyFormattedCitation":"(Adams & Anthony, 1996; Busk & Marascuilo, 1988; Smith, 2012; Solomon, 2014)"},"properties":{"noteIndex":0},"schema":"https://github.com/citation-style-language/schema/raw/master/csl-citation.json"}',
    },
  ],
}

it('should return mendeley citation', () => {
  const csl = getCitationCSL(mendeleyCitation)
  expect(csl).toBeDefined()
  expect(
    csl.title ===
      'From Boulder to Stockholm in 70 years: Single case experimental designs in clinical research'
  )
})
