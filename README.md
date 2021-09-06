# ![DeLorean](https://github.com/davidcelis/emoji/blob/master/delorean.png?raw=true) Welcome to DeLorean Traveler ![DeLorean](https://github.com/davidcelis/emoji/blob/master/delorean.png?raw=true)

Delorean Traveler is an app based on Airbnb website that allows users to reserve the Delorean to travel to movie destinations in time. Users can also leave reviews on locations they have visited and have many locations to choose from. DeLorean Traveler was created using Flask, React, and Redux.

** A live link to the website can be found here: https://solo-project-bttf.herokuapp.com/ **


## ![clock](https://emojis.slackmojis.com/emojis/images/1618820290/31748/alarm_clock.gif?1618820290) Website walk-through ![clock](https://emojis.slackmojis.com/emojis/images/1618820290/31748/alarm_clock.gif?1618820290)
### *Homepage, Sign up page, login page, and users profile page*
![intro](https://user-images.githubusercontent.com/79862908/132204334-b2fddb6e-6404-472c-ae64-85f2768fc738.gif)
---
### *Time-Circuit featured location link, location page, showing CRUD functions for user reviews*
![reviews](https://user-images.githubusercontent.com/79862908/132204646-47318910-420a-4039-80d6-10fbd6e24580.gif)
---
### *Location page, showing CRUD functions for reserving a location*
![reservation](https://user-images.githubusercontent.com/79862908/132204893-628b9d09-4a64-4216-ad2d-1a1344964a03.gif)
---

## ![flash](https://emojis.slackmojis.com/emojis/images/1562618332/5929/lightning.gif?1562618332) Features ![flash](https://emojis.slackmojis.com/emojis/images/1562618332/5929/lightning.gif?1562618332)
* Sign up with user name, first name, last name, email, password, and profile image (png, jpg, jpeg files only)
* Log in with email and password
* Explore all the movie locations with movie details and traveling details
* Post your review on a location and if you decide you can change your review or delete it
* Reserve the DeLorean to travel to a movie location in time and edit or delete your reservation
* User can follow featured locations that is randomly selected for users view.

## ![flash](https://emojis.slackmojis.com/emojis/images/1614881896/17106/electric_guitar.gif?1614881896) Future Features ![flash](https://emojis.slackmojis.com/emojis/images/1614881896/17106/electric_guitar.gif?1614881896)
* Search Bar to find certain locations
* Users can create a location for other users to visit
* Total price and days will show on user's reservation profile

## ![flash](https://emojis.slackmojis.com/emojis/images/1621151350/39399/speedometer.gif?1621151350) Technologies used to build the website ![flash](https://emojis.slackmojis.com/emojis/images/1621151350/39399/speedometer.gif?1621151350)
### Backend
* Flask
* Python
* JavaScript
* PostgresSQL
* SQLAlchemy
* WTForms
### Frontend
* React
* JavaScript
* CSS3
* HTML5
* Heroku

## ![flash](https://emojis.slackmojis.com/emojis/images/1594834432/9699/docbrown.gif?1594834432) Backend review POST routes code snippet: ![flash](https://emojis.slackmojis.com/emojis/images/1594834432/9699/docbrown.gif?1594834432)
```
@review_route.route('/', methods=['POST'])
def postReview():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_review = Review(userId=data['userId'],
                            locationId=data['locationId'],
                            review=data['review'])
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors(form.errors)}, 401
```
## ![hover](https://emojis.slackmojis.com/emojis/images/1618737024/31193/hoverboard.gif?1618737024) FrontEnd review code snippet: ![hover](https://emojis.slackmojis.com/emojis/images/1618737024/31193/hoverboard.gif?1618737024)
```
export const createReviewThunk = review => async (dispatch) => {
    const response = await fetch(`/api/review/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const newReview = await response.json()
        dispatch(addReview(newReview))
    }
    return response
}
```
## DeLorean Traveler created by:
![](https://emojis.slackmojis.com/emojis/images/1614195067/14740/pc_computer.gif?1614195067) [@D3vila](https://github.com/D3vila) ![](https://emojis.slackmojis.com/emojis/images/1614195067/14740/pc_computer.gif?1614195067)
