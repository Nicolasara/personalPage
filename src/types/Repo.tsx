interface Repo {
    id: number
    name: string
    private: boolean
    html_url: string
    description: string
    created_at: string
    updated_at: string
    homepage: string
    size: number
    language: string
    topics: string[]
    watchers: number    
  }

  export default Repo