async function getWeatherByZipcode(zipCode) {
    console.log(zipCode);
    // Use the Fetch API to make a request to an API service and return the result
    const req = new Request('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=21bfdd504f45debea0b72f9bd2da4862');

    // By using the await keyword here, we can shorthand the promise syntax to not have to run .then() to resolve the promise
    const response = await fetch(req);
       // console.log(response);
    if (!response.ok) {
        throw new Error(response);
    }
    console.log(response);

    return response.json();
    /*
        Even though the Fetch API abstracts this information from us, let's talk about status codes:

        100-199: Informational
        200-299: Success
        300-399: Redirection
        400-499: Client Side Error
        500-599: Server Side Error

        When we say response.ok, what we mean is that the response was in the 200 series of status codes
    */
    /*
        We can use the Request.method property to set the HTTP method we want our request to use. By default, this is "GET".
        But lets take a look at the different HTTP methods we have available:

        GET: Retrieves a resource at the endpoint.
        PUT: Completely overwrites a resource at the endpoint. This can create or update a resource.
        DELETE: Removes a resource at the endpoint.
        POST: Creates a resource at the endpoint.
        PATCH: Partially overwrites a resource at the endpoint (update).

        There are more, but these are the most common. The first 3 (GET, PUT and DELETE) are idempotent: they will not cause any further
        changes if duplicate requests are made. The last 2 (POST and PATCH) are NOT idempotent, which means they WILL cause changes if
        duplicate requests are made. PATCH is a unique method, as it can sometimes be idempotent. Be especially careful with non-idempotent methods.

        When looking into HTTP requests, you will notice that the endpoints are referred to as URI's. URI stands for Uniform Resource Identifier, of which
        URL's (Uniform Resource Locator) are actually a subset. For our purposes, a URI is the name of the endpoint that points to an API resource, while a 
        URL specifies a protocol to link to a web page.
    */
}

export {getWeatherByZipcode};