const blogDiv1 = document.getElementsByClassName('blogs-div')[0].clientHeight;
const blogDiv2 = document.getElementsByClassName('blogs-div')[1].clientHeight;
const borderDiv = document.getElementsByClassName('img-content-dotted-border')[0];



if(blogDiv1>=blogDiv2){
document.getElementsByClassName('blogs-div')[1].style.height = blogDiv1+'px'; 
}else if(blogDiv2>=blogDiv1){
document.getElementsByClassName('blogs-div')[0].style.height = blogDiv2+'px'; 
}



var stateSelect = document.getElementById("select-state");
var citySelect = document.getElementById("select-city");

var stateToCities = {
"alabama": ["Alexander City", "Andalusia", "Anniston", "Athens", "Atmore", "Auburn", "Birmingham", "Decatur", "Dothan", "Florence", "Gadsden"],

"alaska": ["Anchorage", "Cordova", "Fairbanks", "Haines", "Homer", "Juneau", "Ketchikan", "Nome", "Sitka", "Skagway"],

"arizona": ["Avondale", "Casa Grande", "Chandler", "Clifton", "Douglas", "Flagstaff", "Gilbert", "Glendale", "Mesa", "Phoenix", "Tempe"],

"arkansas": ["Arkadelphia", "Arkansas Post", "Batesville", "Benton", "Blytheville", "Conway", "Fayetteville", "Hot Springs", "Jonesboro", "Little Rock"],

"california": ["Berkeley", "Buena Park", "Chico", "Culver City", "Huntington Beach", "Mountain View", "Oakland", "Sacramento", "San Diego", "San Francisco", "Santa Monica"],

"colorado": ["Colorado Springs", "Fort Collins", "Littleton", "Longmont", "Montrose", "Pagosa Springs", "Pueblo", "Steamboat Springs", "Telluride", "Vail"],

"connecticut": ["Ansonia", "Bloomfield", "Hartford", "Stratford", "West Hartford", "Bridgeport", "Danbury", "New Haven", "Norwalk", "Stamford"],

"delaware": ["Dover", "Lewes", "New Castle", "Newark", "Wilmington", "Bethany Beach", "Middletown", "Milford", "Seaford", "Smyrna"],

"florida": ["Apalachicola", "Belle Glade", "Boca Raton", "Cape Coral", "Cocoa Beach", "De Land", "Jacksonville", "Miami", "Orlando", "Pensacola", "Tampa"],

"georgia": ["Gainesville", "Macon", "Douglas", "Fort Valley", "La Grange", "Milledgeville", "Albany", "Athens", "Atlanta", "Savannah", "Valdosta"],

"hawaii": ["Hanalei", "Honaunau", "Kawaihae", "Wahiawa", "Waimea", "Kahului", "Hilo", "Honolulu", "Kailua", "Lahaina", "Pearl City"],

"idaho": ["Bonners Ferry", "Idaho Falls", "Moscow", "Priest River", "Rexburg", "Sun Valley", "Boise", "Coeur d'Alene", "Lewiston", "Meridian", "Pocatello"],

"illinois": ["Lombard", "Mount Vernon", "Naperville", "Park Ridge", "Petersburg", "Rantoul", "Chicago", "Peoria", "Rockford", "Springfield", "Urbana"],

"indiana": ["Bloomington", "Elkhart", "Fort Wayne", "Goshen", "Huntington", "Michigan City", "Evansville", "Indianapolis", "South Bend", "Terre Haute", "West Lafayette"],

"iowa": ["Council Bluffs", "Fort Dodge", "Indianola", "Mount Pleasant", "Ottumwa", "Ames", "Cedar Rapids", "Davenport", "Des Moines", "Dubuque", "Waterloo"],

"kansas": ["Arkansas City", "Dodge City", "Garden City", "Great Bend", "Independence", "Lawrence", "Manhattan", "Overland Park", "Topeka", "Wichita"],

"kentucky": ["Ashland", "Elizabethtown", "Harrodsburg", "Hopkinsville", "Maysville", "Bowling Green", "Lexington", "Louisville", "Owensboro", "Paducah"],

"louisiana": ["Alexandria", "Lafayette", "Morgan City", "Saint Martinville", "Shreveport", "Thibodaux", "Baton Rouge", "Lake Charles", "Monroe", "New Orleans"],

"maine": ["Bar Harbor", "Boothbay Harbor", "Caribou", "Farmington", "Kennebunkport", "Presque Isle", "Augusta", "Bangor", "Lewiston", "Portland"],

"maryland": ["Bethesda-Chevy Chase", "Cumberland", "Emmitsburg", "Saint Marys City", "Silver Spring", "Annapolis", "Baltimore", "Frederick", "Ocean City", "Rockville"],

"massachusetts": ["Barnstable", "Braintree", "Cambridge", "Edgartown", "Great Barrington", "Leominster", "Boston", "Lowell", "Springfield", "Worcester"],

"michigan": ["Bloomfield Hills", "Cheboygan", "East Lansing", "Grand Haven", "Grosse Pointe", "Jackson", "Ann Arbor", "Detroit", "Grand Rapids", "Lansing"],

"minnesota": ["Bloomington", "Crookston", "Rochester", "South Saint Paul", "Stillwater", "Duluth", "Minneapolis", "Saint Cloud", "Saint Paul", "Winona"],

"mississippi": ["Greenwood", "Holly Springs", "Ocean Springs", "Pass Christian", "Starkville", "Biloxi", "Jackson", "Meridian", "Tupelo", "Vicksburg"],

"missouri": ["Cape Girardeau", "Excelsior Springs", "Florissant", "Kansas City", "Lebanon", "Columbia", "Jefferson City", "Saint Joseph", "Saint Louis", "Springfield"],

"montana": ["Fort Benton", "Great Falls", "Helena", "Lewistown", "Virginia City", "Billings", "Bozeman", "Butte", "Missoula", "Yellowstone"],

"nebraska": ["Boys Town", "Columbus", "Hastings", "Kearney", "Nebraska City", "Lincoln", "Norfolk", "North Platte", "Omaha", "Scottsbluff"],

"nevada": ["Boulder City", "Genoa", "North Las Vegas", "Sparks", "Winnemucca", "Carson City", "Henderson", "Las Vegas", "Reno", "Sunrise Manor"],

"new-hampshire": ["Berlin", "Concord", "Dover", "Hillsborough", "Rochester", "Keene", "Manchester", "Nashua", "Portsmouth", "Salem"],

"new-jersey": ["Bloomfield", "Bound Brook", "Caldwell", "East Orange", "Haddonfield", "Atlantic City", "Jersey City", "Newark", "Paterson", "Trenton"],

"new-mexico": ["Albuquerque", "Las Cruces", "Los Alamos", "Roswell", "Truth or Consequences", "Farmington", "Santa Fe", "Taos", "Gallup", "Carlsbad"],

"new-york": ["Binghamton", "Buffalo", "Coney Island", "East Hampton", "Flushing", "Albany", "New York City", "Rochester", "Syracuse", "Yonkers"],

"north-carolina": ["Beaufort", "Chapel Hill", "Durham", "Elizabeth City", "Kitty Hawk", "Asheville", "Charlotte", "Greensboro", "Raleigh", "Wilmington"],

"north-dakota": ["Bismarck", "Grand Forks", "Minot", "Rugby", "Valley City", "Fargo", "Jamestown", "Mandan", "Williston", "Dickinson"],

"ohio": ["Bowling Green", "Cleveland Heights", "Cuyahoga Falls", "Defiance", "East Cleveland", "Cincinnati", "Columbus", "Dayton", "Toledo", "Youngstown"],

"oklahoma": ["Anadarko", "Guymon", "Midwest City", "Ponca City", "Sapulpa", "Lawton", "Norman", "Oklahoma City", "Tulsa", "Stillwater"],

"oregon": ["Coos Bay", "La Grande", "McMinnville", "Newberg", "Port Orford", "Bend", "Eugene", "Portland", "Salem", "Medford"],

"pennsylvania": ["Chambersburg", "Germantown", "Hanover", "Honesdale", "Jeannette", "Allentown", "Harrisburg", "Philadelphia", "Pittsburgh", "Scranton"],

"rhode-island": ["East Providence", "North Kingstown", "South Kingstown", "Woonsocket", "Warwick", "Cranston", "Newport", "Pawtucket", "Providence", "West Warwick"],

"south-carolina": ["Charleston", "Georgetown", "Mount Pleasant", "Myrtle Beach", "Spartanburg", "Columbia", "Greenville", "Hilton Head Island", "North Charleston", "Rock Hill"],

"south-dakota": ["Brookings", "Madison", "Mobridge", "Rapid City", "Spearfish", "Aberdeen", "Mitchell", "Pierre", "Sioux Falls", "Watertown"],

"tennessee": ["Chattanooga", "Gatlinburg", "Greeneville", "Lebanon", "Murfreesboro", "Knoxville", "Memphis", "Nashville", "Pigeon Forge", "Savannah"],

"texas": ["Beaumont", "Denton", "Fort Worth", "Galveston", "Houston", "Austin", "Dallas", "El Paso", "San Antonio", "Waco"],

"vermont":["Bennington", "Burlington", "Middlebury", "Montpelier", "Rutland", "Brattleboro", "Barre", "Stowe", "Woodstock", "Manchester"],

"virginia": ["Alexandria", "Charlottesville", "Hampton", "Lynchburg", "Norfolk", "Richmond", "Roanoke", "Virginia Beach", "Williamsburg", "Winchester"],

"washington": ["Bellevue", "Everett", "Olympia", "Richland", "Seattle", "Spokane", "Tacoma", "Vancouver", "Walla Walla", "Yakima"],

"west-virginia": ["Beckley", "Charleston", "Harpers Ferry", "Huntington", "Martinsburg", "Morgantown", "Parkersburg", "Wheeling", "Shepherdstown", "Clarksburg"],

"wisconsin": ["Appleton", "Eau Claire", "Green Bay", "Hayward", "Kenosha", "La Crosse", "Madison", "Milwaukee", "Oshkosh", "Superior"],

"wyoming": ["Casper", "Cody", "Douglas", "Evanston", "Lander", "Cheyenne", "Gillette", "Jackson", "Laramie", "Rock Springs"]
};

stateSelect.addEventListener("change", function() {
  citySelect.innerHTML = "<option value=''>-- Choose A City --</option>";
  var stateValue = stateSelect.value;
  if (stateValue !== "") {
    var cities = stateToCities[stateValue];
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      var option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    }
  }
});
