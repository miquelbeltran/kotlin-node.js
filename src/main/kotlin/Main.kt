external fun require(module:String):dynamic

fun main(args: Array<String>) {
    println("Hello JavaScript!")

    val express = require("express")
    val app = express()
    val amazon = Amazon()

    app.get("/", { req, res ->
        res.type("text/plain")
        res.send("i am a beautiful butterfly")
    })

    app.get("/amazon/:asin", { req, res ->
        res.type("text/plain")
        amazon.getAmazonPrice(req.params.asin) {
            res.send("Price is $it")
        }
    })

    app.listen(3000, {
        println("Listening on port 3000")
    })
}

