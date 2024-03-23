const request=require('postman-request')

const forecast=(latitude,longitude,callback)=>{
    const url = ' http://api.weatherstack.com/current?access_key=aadfc211e68fa2037742142076591958&query=' + latitude + ',' + longitude + '&unit=c'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }else{ 
           callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike + " degrees out. There is a " + body.current.precip +'% chance of rain')
        }
    })
}

module.exports=forecast 