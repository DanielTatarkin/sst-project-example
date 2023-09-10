import { StackContext, Api, StaticSite, Function } from "sst/constructs"
import { Certificate } from "aws-cdk-lib/aws-certificatemanager"

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        runtime: "nodejs18.x",
        architecture: "arm_64",
      },
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /python": {
        function: {
          runtime: "python3.11",
          architecture: "x86_64", // ARM not supported by GitHub Hosted Runners
          handler: "packages/functions/src/index.handler",
        },
      },
      "GET /todo": "packages/functions/src/todo.list",
      "POST /todo": "packages/functions/src/todo.create",
    },
  })

  const cert = Certificate.fromCertificateArn(
    stack,
    "MyCert",
    <CERT_ARN>,
  )

  const site = new StaticSite(stack, "VueJSSite", {
    path: "packages/frontend",
    buildOutput: "dist",
    buildCommand: "pnpm run build",
    errorPage: "redirect_to_index_page",
    environment: {
      VITE_API_URL: api.url,
    },
    customDomain: {
      isExternalDomain: true,
      domainName: <CUSTOM_DOMAIN>,
      cdk: {
        certificate: cert,
      },
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteUrl: site.url,
  })
}
