resource "vercel_project" "nextjs_app" {
  name      = "fitcheck"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "almuqsitm/FitCheck"
  }

  environment = [
    {
      key    = "NEXT_PUBLIC_ENV"
      value  = "production"
      target = ["production"]
    }
  ]
}

