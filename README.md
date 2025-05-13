# unlock-premium_fickkay
[Script]

premium_unlock = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/Fickkay722/unlock-premium_fickkay/refs/heads/main/unlock_premium.js, requires-body=true

strip_headers = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/Fickkay722/unlock-premium_fickkay/refs/heads/main/delete_headers.js
[MITM]
hostname = %APPEND% api.revenuecat.com
