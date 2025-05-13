let headers = $request.headers;

delete headers['Authorization'];
delete headers['X-RevenueCat-ETag'];
delete headers['User-Agent'];

$done({ headers });
