build:
	web-ext build --ignore-files docs --overwrite-dest

sign:
	web-ext sign --api-key=${MOZ_API_KEY} --api-secret=${MOZ_API_SECRET}
