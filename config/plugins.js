module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          credentials: {
            accessKeyId: env("BUCKET_ACCESS_KEY"),
            secretAccessKey: env("BUCKET_SECRET_KEY"),
          },
          region: env("BUCKET_REGION"),
          endpoint: `https://s3.${env("BUCKET_REGION")}.scw.cloud`,
          params: {
            Bucket: env("BUCKET_NAME"),
          },
        },
      },
    },
    "protected-populate": {
      enabled: true,
      config: {
        ["auto-populate"]: true,
      },
    },
  };
};
