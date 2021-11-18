(function(window, undefined) {
  var dictionary = {
    "3a1da146-acbe-42b5-b2a1-7b37248a9d40": "Map",
    "737aa654-3966-4ea0-ba77-396660e7d4ea": "capstone",
    "839a6ecd-b5e2-48bf-9bc5-cd8b007fd308": "Profile",
    "423c2f37-a805-4b62-9d79-2880e535f573": "Vehicles2",
    "deb32378-63d1-4908-95a4-65af69d8b3a9": "phonesss",
    "6c206972-2fea-4a17-bae7-96c2d296992a": "Car",
    "c7d03e86-a28d-4980-b893-68e1e08a04fc": "Vehicles",
    "91272f52-6baa-4218-84e7-eec06fb89dab": "collo",
    "ad015f96-7874-4160-babb-edfeddb60c1e": "passesssc",
    "a3845214-bb44-4a81-98b1-0b5d6c4c4145": "carinfo2",
    "28ae7193-86a9-4af5-8792-632ca69127ee": "Profile manage",
    "357d8965-5e82-4c26-965f-467c380b3234": "russel",
    "c11ebb70-1735-426f-9e2f-4b8a9d7c335a": "furrtherparking",
    "c9474f7b-e0b5-40ca-9149-173e5553bce4": "swearingen",
    "163d40e0-be66-48a9-8766-eba64ed1dc12": "Screen 2",
    "40799d57-4be3-4e95-8811-7853a695e05e": "main",
    "86b60861-50fb-4d86-8f0b-58ce37879763": "spottaken",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "5ba1f32f-f8b7-4452-89c2-56260a98804b": "Parking passes",
    "b765a55c-0597-4901-8136-7d60d0aee393": "Vehicleadd",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);