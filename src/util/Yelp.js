const apiKey = 'CvL_i2uJLFUFqW9JHIwF7J1CycKUuL4x7EkT_El1p99H0_U-TQ3It3nk-45VoouAm1ZEK5Ehq4v-yhgEU80-sZHyWbZqGmyP4GsfZLUPXHaYlBr_3V2KVsTM5PAyX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business)
          return {
            id : business.id,
            imageSrc : business.image_url,
            name : business.name,
            address : business.location.address1,
            city : business.location.city,
            state : business.location.state,
            zipCode : business.location.zip_code,
            category : business.categories[0].title,
            rating : business.rating,
            reviewCount : business.reviewCount,
            url : business.url
          }
        })
      }
    });
  }
}

export default Yelp;
