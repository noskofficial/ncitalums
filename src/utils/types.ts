export interface AlumniProfileInfo {
  name: string
  program: string
  batch: string
  image?: { url: string }
  slogan?: string
  tags: string[]
  history: { year: string; position: string; company: string }[]
  slug: string
}

export interface EventData {
  id: string
  Title: string
  By: string[]
  Date: string
  Time: string
  URL: string
  IMGURL: string // this is the url to the section on html page so it cannot be used for the image
  BannerURL: string // there is no banner url but should be added for latest entries to the events.json
  ProfileLink: string[]
}
