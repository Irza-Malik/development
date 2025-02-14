var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
function percentage(){
    var totalreviews=course["1_stars_reviews"] + 
        course["2_stars_reviews"] + 
        course["3_stars_reviews"] + 
        course["4_stars_reviews"] + 
        course["5_stars_reviews"];
    var per=(course["5_stars_reviews"]/totalreviews)*100;
    return Math.round(per);
}
document.getElementById("demo2").innerHTML="Course title: " + course.title;
document.getElementById("demo3").innerHTML="Main Category: " + course.categories[0];
document.getElementById("demo4").innerHTML="Percentage of 5 stars reviews: " + percentage();

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
shoppingList.unshift(shoppingList.pop());
shoppingList.push("cheese");
shoppingList.push("egg");
console.log(shoppingList);

