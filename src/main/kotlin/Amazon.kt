class Amazon {
    val request: dynamic = require("request")
    val amazonUrl = "https://www.amazon.de/dp/"
    val patStart = "<span id=\"priceblock_ourprice\" class=\"a-size-medium a-color-price\">"
    val patEnd = "</span>"

    fun getAmazonPrice(asin: String, function: (String) -> dynamic) {
        request(amazonUrl + asin) { error: String?, _, body: String ->
            if (error.isNullOrEmpty()) {
                val index = body.indexOf(patStart) + patStart.length
                val end = body.indexOf(patEnd, index)
                function(body.substring(index, end))
            } else {
                println(error)
            }
        }
    }
}


