// src/utils/urlUtils.ts

export function normalizeUrl(url: string): string {
	// Remove leading and trailing whitespace
	url = url.trim()

	// If the URL doesn't start with a protocol, add https://
	if (!/^https?:\/\//i.test(url)) {
		url = 'https://' + url
	}

	// If the URL doesn't have www. and doesn't have a subdomain, add www.
	if (!/^https?:\/\/[^.]+\.[^.]+/.test(url)) {
		url = url.replace(/^(https?:\/\/)/, '$1www.')
	}

	return url
}
