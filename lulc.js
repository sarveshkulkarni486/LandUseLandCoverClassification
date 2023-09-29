var roi = ee.FeatureCollection("users/aartipatare04/AOI"),
imageVisParam = {"opacity":1,"bands":["B4","B3","B2"],"min":0.07302353248000144,"max":0.1522994814813137,"gamma":1},
imageCollection = ee.ImageCollection("LANDSAT/LC08/C02/T1_TOA"),
water = 
/* color: #1a00d6 */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.39509304873032, 19.78853380180088]),
        {
          "class": 1,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39616593233627, 19.78893761259366]),
        {
          "class": 1,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39685257784409, 19.78926066049059]),
        {
          "class": 1,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3978825461058, 19.789745231107183]),
        {
          "class": 1,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39882668367905, 19.789866373530927]),
        {
          "class": 1,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39972790590805, 19.7899875158625]),
        {
          "class": 1,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40050038210434, 19.790795129051038]),
        {
          "class": 1,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4013586889891, 19.790835509602946]),
        {
          "class": 1,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40251740328354, 19.79047208426717]),
        {
          "class": 1,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40423401705307, 19.790310561629465]),
        {
          "class": 1,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40367611757797, 19.79010865810191]),
        {
          "class": 1,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40277489534897, 19.78982599273325]),
        {
          "class": 1,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40230282656235, 19.78982599273325]),
        {
          "class": 1,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40161618105454, 19.789947135095545]),
        {
          "class": 1,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40088662020248, 19.789947135095545]),
        {
          "class": 1,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39981373659653, 19.789947135095545]),
        {
          "class": 1,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39822586885971, 19.789624088591278]),
        {
          "class": 1,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39715298525375, 19.789381803282975]),
        {
          "class": 1,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39685257784409, 19.788897231560455]),
        {
          "class": 1,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40268906466049, 19.789422184193295]),
        {
          "class": 1,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40281781069321, 19.789099136624035]),
        {
          "class": 1,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40281781069321, 19.78885685051702]),
        {
          "class": 1,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4033757101683, 19.78926066049059]),
        {
          "class": 1,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40397652498764, 19.789664469440137]),
        {
          "class": 1,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40436276308579, 19.7899875158625]),
        {
          "class": 1,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40466317049545, 19.790149038827913]),
        {
          "class": 1,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40487774721664, 19.789704850278778]),
        {
          "class": 1,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40522106997055, 19.789099136624035]),
        {
          "class": 1,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40470608583969, 19.789099136624035]),
        {
          "class": 1,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40384777895493, 19.789099136624035]),
        {
          "class": 1,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40380486361069, 19.78853380180088]),
        {
          "class": 1,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40341862551254, 19.78853380180088]),
        {
          "class": 1,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40470608583969, 19.788695326240862]),
        {
          "class": 1,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40127285830063, 19.789785611925343]),
        {
          "class": 1,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40028580538315, 19.789785611925343]),
        {
          "class": 1,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39977082125229, 19.789785611925343]),
        {
          "class": 1,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39891251436752, 19.789947135095545]),
        {
          "class": 1,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39818295351547, 19.78954332686281]),
        {
          "class": 1,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39771088472885, 19.789341422362426]),
        {
          "class": 1,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39719590059799, 19.78893761259366]),
        {
          "class": 1,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39646633974594, 19.788574182926233]),
        {
          "class": 1,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39569386354965, 19.788574182926233]),
        {
          "class": 1,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25448713985945, 19.87460727419756]),
        {
          "class": 1,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25513087002302, 19.874849429563845]),
        {
          "class": 1,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2557746001866, 19.87509158456014]),
        {
          "class": 1,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25607500759627, 19.875495175398438]),
        {
          "class": 1,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25680456844832, 19.875858406274226]),
        {
          "class": 1,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25753412930037, 19.875818047329137]),
        {
          "class": 1,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25822077480818, 19.875818047329137]),
        {
          "class": 1,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25783453671004, 19.87533373918646]),
        {
          "class": 1,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25731955257918, 19.875172302810018]),
        {
          "class": 1,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25693331448103, 19.875172302810018]),
        {
          "class": 1,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25581751553084, 19.875010866269154]),
        {
          "class": 1,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25616083828474, 19.874849429563845]),
        {
          "class": 1,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25650416103865, 19.874647633450977]),
        {
          "class": 1,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25719080654646, 19.874728351926954]),
        {
          "class": 1,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2575770446446, 19.87488978875558]),
        {
          "class": 1,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25852118221785, 19.875818047329137]),
        {
          "class": 1,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25899325100447, 19.875858406274226]),
        {
          "class": 1,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25873575893904, 19.875616252449532]),
        {
          "class": 1,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25847826687361, 19.875172302810018]),
        {
          "class": 1,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25804911343123, 19.875010866269154]),
        {
          "class": 1,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25873575893904, 19.87488978875558]),
        {
          "class": 1,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2592507430699, 19.87541445731301]),
        {
          "class": 1,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25912199703718, 19.875010866269154]),
        {
          "class": 1,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25903616634871, 19.874728351926954]),
        {
          "class": 1,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25864992825056, 19.87436511846133]),
        {
          "class": 1,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25809202877547, 19.87436511846133]),
        {
          "class": 1,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25783453671004, 19.87428439980037]),
        {
          "class": 1,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25680456844832, 19.874244040454464]),
        {
          "class": 1,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25607500759627, 19.874163321731842]),
        {
          "class": 1,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25564585415388, 19.874244040454464]),
        {
          "class": 1,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25453005520369, 19.87436511846133]),
        {
          "class": 1,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25495920864607, 19.874163321731842]),
        {
          "class": 1,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25504503933455, 19.873194693854078]),
        {
          "class": 1,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25538836208845, 19.874244040454464]),
        {
          "class": 1,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25551710812117, 19.87327541306997]),
        {
          "class": 1,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25620375362898, 19.873477210929888]),
        {
          "class": 1,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25671873775984, 19.873759727502144]),
        {
          "class": 1,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25744829861189, 19.873880805878954]),
        {
          "class": 1,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2577916213658, 19.87400188416329]),
        {
          "class": 1,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25856409756209, 19.874163321731842]),
        {
          "class": 1,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25804911343123, 19.873436851378443]),
        {
          "class": 1,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25727663723494, 19.872791097157997]),
        {
          "class": 1,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25641833035017, 19.873033255298957]),
        {
          "class": 1,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25551710812117, 19.872750737431875]),
        {
          "class": 1,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25671873775984, 19.872750737431875]),
        {
          "class": 1,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25616083828474, 19.87194354075139]),
        {
          "class": 1,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25641833035017, 19.871983900683038]),
        {
          "class": 1,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25680456844832, 19.872347139605427]),
        {
          "class": 1,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25706206051375, 19.87258929842462]),
        {
          "class": 1,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25624666897322, 19.8771095284742]),
        {
          "class": 1,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2555600234654, 19.87654450676823]),
        {
          "class": 1,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25525961605574, 19.877513114173667]),
        {
          "class": 1,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2552167007115, 19.87719024569633]),
        {
          "class": 1,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25478754726912, 19.87702881121097]),
        {
          "class": 1,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25461588589216, 19.876827017873033]),
        {
          "class": 1,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25435839382673, 19.876625224278133]),
        {
          "class": 1,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25401507107283, 19.87614091860207]),
        {
          "class": 1,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2537575790074, 19.875858406274226]),
        {
          "class": 1,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25418673244978, 19.875374098254856]),
        {
          "class": 1,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25564585415388, 19.87670594174692]),
        {
          "class": 1,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33571848759122, 19.932390767948352]),
        {
          "class": 1,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33503184208341, 19.932229389769105]),
        {
          "class": 1,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33498892673917, 19.932229389769105]),
        {
          "class": 1,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33383021244474, 19.93174525424237]),
        {
          "class": 1,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33318648228116, 19.93150318592272]),
        {
          "class": 1,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3323281753964, 19.931422496400423]),
        {
          "class": 1,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33189902195402, 19.931422496400423]),
        {
          "class": 1,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33108363041349, 19.93150318592272]),
        {
          "class": 1,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33168444523282, 19.93097870329124]),
        {
          "class": 1,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33318648228116, 19.93049456393238]),
        {
          "class": 1,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33258566746183, 19.93057525392853]),
        {
          "class": 1,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33438811191984, 19.930817323669775]),
        {
          "class": 1,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33498892673917, 19.931462841166717]),
        {
          "class": 1,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33679137119718, 19.932229389769105]),
        {
          "class": 1,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33520350346036, 19.931220772414406]),
        {
          "class": 1,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33786425480314, 19.93118042758631]),
        {
          "class": 1,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3367055405087, 19.93118042758631]),
        {
          "class": 1,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33631930241056, 19.930454218918857]),
        {
          "class": 1,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33601889500089, 19.930373528860898]),
        {
          "class": 1,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33550391087003, 19.929849042479816]),
        {
          "class": 1,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33511767277189, 19.929243863723098]),
        {
          "class": 1,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33606181034513, 19.929284209045647]),
        {
          "class": 1,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33631930241056, 19.92952628076465]),
        {
          "class": 1,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33674845585294, 19.929970077953033]),
        {
          "class": 1,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33683428654142, 19.930091113333553]),
        {
          "class": 1,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33752093204923, 19.9301314584398]),
        {
          "class": 1,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3378213394589, 19.929728006913876]),
        {
          "class": 1,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3372634399838, 19.928436955108975]),
        {
          "class": 1,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33657679447599, 19.928073844888445]),
        {
          "class": 1,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33623347172208, 19.928033499256887]),
        {
          "class": 1,
          "system:index": "131"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33387312778898, 19.92783177094459]),
        {
          "class": 1,
          "system:index": "132"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33563265690275, 19.92795280796287]),
        {
          "class": 1,
          "system:index": "133"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33511767277189, 19.92795280796287]),
        {
          "class": 1,
          "system:index": "134"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33443102726407, 19.92710554688826]),
        {
          "class": 1,
          "system:index": "135"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33237109074064, 19.926984509221093]),
        {
          "class": 1,
          "system:index": "136"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3341306198544, 19.925975858389947]),
        {
          "class": 1,
          "system:index": "137"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33417353519864, 19.925411011112836]),
        {
          "class": 1,
          "system:index": "138"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33473143467374, 19.925411011112836]),
        {
          "class": 1,
          "system:index": "139"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33546099552579, 19.927387967751145]),
        {
          "class": 1,
          "system:index": "140"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33653387913175, 19.926944163311443]),
        {
          "class": 1,
          "system:index": "141"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33563265690275, 19.92573378123264]),
        {
          "class": 1,
          "system:index": "142"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35743365177579, 19.938603702506647]),
        {
          "class": 1,
          "system:index": "143"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35932192692228, 19.93945090192234]),
        {
          "class": 1,
          "system:index": "144"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35842070469327, 19.938280958676774]),
        {
          "class": 1,
          "system:index": "145"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35816321262784, 19.937998557284633]),
        {
          "class": 1,
          "system:index": "146"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35760531315275, 19.937554782648316]),
        {
          "class": 1,
          "system:index": "147"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3566611755795, 19.93634448184867]),
        {
          "class": 1,
          "system:index": "148"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3557599533505, 19.936102420575942]),
        {
          "class": 1,
          "system:index": "149"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35661826023527, 19.935900702565323]),
        {
          "class": 1,
          "system:index": "150"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35640368351407, 19.935376234532225]),
        {
          "class": 1,
          "system:index": "151"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3577769745297, 19.93638482535807]),
        {
          "class": 1,
          "system:index": "152"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35872111210294, 19.93739340974417]),
        {
          "class": 1,
          "system:index": "153"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35897860416837, 19.93678825988529]),
        {
          "class": 1,
          "system:index": "154"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35743365177579, 19.935779671635323]),
        {
          "class": 1,
          "system:index": "155"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35910735020109, 19.934851764757898]),
        {
          "class": 1,
          "system:index": "156"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35790572056241, 19.935093827947025]),
        {
          "class": 1,
          "system:index": "157"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35854945072599, 19.935860358932285]),
        {
          "class": 1,
          "system:index": "158"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36022314915128, 19.936667229635308]),
        {
          "class": 1,
          "system:index": "159"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36009440311857, 19.93803890037158]),
        {
          "class": 1,
          "system:index": "160"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35936484226652, 19.939531587343957]),
        {
          "class": 1,
          "system:index": "161"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3583348740048, 19.94021741176354]),
        {
          "class": 1,
          "system:index": "162"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3566611755795, 19.93997535642611]),
        {
          "class": 1,
          "system:index": "163"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35623202213712, 19.93747409621685]),
        {
          "class": 1,
          "system:index": "164"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35648951420255, 19.93908781701493]),
        {
          "class": 1,
          "system:index": "165"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35713324436612, 19.93803890037158]),
        {
          "class": 1,
          "system:index": "166"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35425791630216, 19.937070663441276]),
        {
          "class": 1,
          "system:index": "167"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35451540836759, 19.93618310770806]),
        {
          "class": 1,
          "system:index": "168"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35545954594083, 19.935658640612566]),
        {
          "class": 1,
          "system:index": "169"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3601373184628, 19.93614276414716]),
        {
          "class": 1,
          "system:index": "170"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36099562534757, 19.936263794798975]),
        {
          "class": 1,
          "system:index": "171"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36026606449552, 19.93533589076525]),
        {
          "class": 1,
          "system:index": "172"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35970816502042, 19.935093827947025]),
        {
          "class": 1,
          "system:index": "173"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35966524967618, 19.936667229635308]),
        {
          "class": 1,
          "system:index": "174"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35932192692228, 19.93836164469607]),
        {
          "class": 1,
          "system:index": "175"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35863528141446, 19.93908781701493]),
        {
          "class": 1,
          "system:index": "176"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35781988987394, 19.9398946712312]),
        {
          "class": 1,
          "system:index": "177"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35653242954679, 19.938200272616246]),
        {
          "class": 1,
          "system:index": "178"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55597979233747, 19.915473652479974]),
        {
          "class": 1,
          "system:index": "179"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55434900925641, 19.91664376457451]),
        {
          "class": 1,
          "system:index": "180"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55267531083112, 19.916199929971636]),
        {
          "class": 1,
          "system:index": "181"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55271822617536, 19.914989465632498]),
        {
          "class": 1,
          "system:index": "182"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55374819443708, 19.912286061824247]),
        {
          "class": 1,
          "system:index": "183"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55550772355085, 19.913617594847892]),
        {
          "class": 1,
          "system:index": "184"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55417734787946, 19.914707022620227]),
        {
          "class": 1,
          "system:index": "185"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55228907273298, 19.91418248425919]),
        {
          "class": 1,
          "system:index": "186"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54949957535749, 19.912165012811716]),
        {
          "class": 1,
          "system:index": "187"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54932791398053, 19.91155976635946]),
        {
          "class": 1,
          "system:index": "188"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55048662827497, 19.911963264251625]),
        {
          "class": 1,
          "system:index": "189"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5505295436192, 19.90938085995611]),
        {
          "class": 1,
          "system:index": "190"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55005747483258, 19.90792823901409]),
        {
          "class": 1,
          "system:index": "191"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54825503037458, 19.907403678173868]),
        {
          "class": 1,
          "system:index": "192"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54585177109723, 19.909784363406228]),
        {
          "class": 1,
          "system:index": "193"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54765421555524, 19.909986114745333]),
        {
          "class": 1,
          "system:index": "194"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55031496689801, 19.911075567530197]),
        {
          "class": 1,
          "system:index": "195"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55246073410993, 19.911600116194986]),
        {
          "class": 1,
          "system:index": "196"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55190283463483, 19.908937004972266]),
        {
          "class": 1,
          "system:index": "197"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55143076584821, 19.914142135082443]),
        {
          "class": 1,
          "system:index": "198"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55113035843854, 19.91595783784502]),
        {
          "class": 1,
          "system:index": "199"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54971415207868, 19.91777351976067]),
        {
          "class": 1,
          "system:index": "200"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54894167588239, 19.916926204127748]),
        {
          "class": 1,
          "system:index": "201"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55027205155378, 19.916159581309596]),
        {
          "class": 1,
          "system:index": "202"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54821211503034, 19.909421210347443]),
        {
          "class": 1,
          "system:index": "203"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54666716263776, 19.90659665810055]),
        {
          "class": 1,
          "system:index": "204"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54821211503034, 19.90643525359193]),
        {
          "class": 1,
          "system:index": "205"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5498428981114, 19.90611244408073]),
        {
          "class": 1,
          "system:index": "206"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5510874430943, 19.90659665810055]),
        {
          "class": 1,
          "system:index": "207"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51443773911481, 19.811177925574338]),
        {
          "class": 1,
          "system:index": "208"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51194864914899, 19.806252052300433]),
        {
          "class": 1,
          "system:index": "209"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51100451157575, 19.806332805551108]),
        {
          "class": 1,
          "system:index": "210"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51091868088727, 19.813035182452026]),
        {
          "class": 1,
          "system:index": "211"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5053396861363, 19.813035182452026]),
        {
          "class": 1,
          "system:index": "212"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50636965439801, 19.81012816209324]),
        {
          "class": 1,
          "system:index": "213"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51134783432965, 19.808109366694996]),
        {
          "class": 1,
          "system:index": "214"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51031786606794, 19.809805156551324]),
        {
          "class": 1,
          "system:index": "215"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50671297715192, 19.81610364629361]),
        {
          "class": 1,
          "system:index": "216"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50774294541364, 19.81327743175009]),
        {
          "class": 1,
          "system:index": "217"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50688463852887, 19.807382594079595]),
        {
          "class": 1,
          "system:index": "218"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50327974961286, 19.81133942703339]),
        {
          "class": 1,
          "system:index": "219"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50302225754743, 19.805686778398094]),
        {
          "class": 1,
          "system:index": "220"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50585467026715, 19.805606024819518]),
        {
          "class": 1,
          "system:index": "221"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50928789780622, 19.802779623747444]),
        {
          "class": 1,
          "system:index": "222"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50722796128278, 19.802133582167254]),
        {
          "class": 1,
          "system:index": "223"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51134783432965, 19.803910190201222]),
        {
          "class": 1,
          "system:index": "224"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51598269150739, 19.809643653534373]),
        {
          "class": 1,
          "system:index": "225"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51692682908063, 19.807624851986986]),
        {
          "class": 1,
          "system:index": "226"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5177851359654, 19.81142017770141]),
        {
          "class": 1,
          "system:index": "227"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51761347458844, 19.81392342807417]),
        {
          "class": 1,
          "system:index": "228"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51280695603376, 19.80948215035346]),
        {
          "class": 1,
          "system:index": "229"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51400858567243, 19.80617129900878]),
        {
          "class": 1,
          "system:index": "230"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50327974961286, 19.81642663904302]),
        {
          "class": 1,
          "system:index": "231"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50156313584333, 19.815053915326814]),
        {
          "class": 1,
          "system:index": "232"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50001818345075, 19.81198543122962]),
        {
          "class": 1,
          "system:index": "233"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4987307231236, 19.809885907998293]),
        {
          "class": 1,
          "system:index": "234"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49701410935407, 19.806736571189564]),
        {
          "class": 1,
          "system:index": "235"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50113398240094, 19.808916887928888]),
        {
          "class": 1,
          "system:index": "236"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50093608513968, 19.805574639155996]),
        {
          "class": 1,
          "system:index": "237"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51526981011527, 19.814861033808775]),
        {
          "class": 1,
          "system:index": "238"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51389651909965, 19.81671824767174]),
        {
          "class": 1,
          "system:index": "239"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21528571721035, 19.888982017298456]),
        {
          "class": 1,
          "system:index": "240"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21560758229214, 19.88884077264621]),
        {
          "class": 1,
          "system:index": "241"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21582215901333, 19.888638994353062]),
        {
          "class": 1,
          "system:index": "242"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21580070134121, 19.888558282963817]),
        {
          "class": 1,
          "system:index": "243"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2156719553085, 19.888517927253783]),
        {
          "class": 1,
          "system:index": "244"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21528571721035, 19.888638994353062]),
        {
          "class": 1,
          "system:index": "245"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25929489611171, 19.937287049428967]),
        {
          "class": 1,
          "system:index": "246"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25935926912807, 19.937387907581297]),
        {
          "class": 1,
          "system:index": "247"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25968113420986, 19.93756945209319]),
        {
          "class": 1,
          "system:index": "248"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25940218447231, 19.93730722106459]),
        {
          "class": 1,
          "system:index": "249"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25914469240688, 19.937166019561158]),
        {
          "class": 1,
          "system:index": "250"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2589515733578, 19.937246706150002]),
        {
          "class": 1,
          "system:index": "251"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25839367388271, 19.937024817931526]),
        {
          "class": 1,
          "system:index": "252"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25899448870204, 19.93696430290875]),
        {
          "class": 1,
          "system:index": "253"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25877991198085, 19.93690378786281]),
        {
          "class": 1,
          "system:index": "254"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22337475298427, 19.961400399901184]),
        {
          "class": 1,
          "system:index": "255"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22333183764003, 19.961037365479864]),
        {
          "class": 1,
          "system:index": "256"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22376099108241, 19.960714667515088]),
        {
          "class": 1,
          "system:index": "257"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2239755678036, 19.960714667515088]),
        {
          "class": 1,
          "system:index": "258"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22500553606532, 19.96111803986791]),
        {
          "class": 1,
          "system:index": "259"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22461929796718, 19.960674330223085]),
        {
          "class": 1,
          "system:index": "260"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22431889055751, 19.960230619330254]),
        {
          "class": 1,
          "system:index": "261"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22380390642665, 19.960230619330254]),
        {
          "class": 1,
          "system:index": "262"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22277393816493, 19.962812192486425]),
        {
          "class": 1,
          "system:index": "263"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22268810747646, 19.963780271527646]),
        {
          "class": 1,
          "system:index": "264"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22320309160732, 19.962973539405898]),
        {
          "class": 1,
          "system:index": "265"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22346058367275, 19.962892865966786]),
        {
          "class": 1,
          "system:index": "266"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22354641436122, 19.962489498152355]),
        {
          "class": 1,
          "system:index": "267"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22320309160732, 19.962489498152355]),
        {
          "class": 1,
          "system:index": "268"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19015827654384, 19.958980154645317]),
        {
          "class": 1,
          "system:index": "269"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19050159929775, 19.95809272208202]),
        {
          "class": 1,
          "system:index": "270"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19131699083827, 19.958455763279403]),
        {
          "class": 1,
          "system:index": "271"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19251862047695, 19.95861711465455]),
        {
          "class": 1,
          "system:index": "272"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19183197496913, 19.957608665852735]),
        {
          "class": 1,
          "system:index": "273"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19144573687099, 19.95680190217056]),
        {
          "class": 1,
          "system:index": "274"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19187489031337, 19.957124608138425]),
        {
          "class": 1,
          "system:index": "275"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19329109667324, 19.95833474963976]),
        {
          "class": 1,
          "system:index": "276"
        }),
    ee.Feature(
        ee.Geometry.Point([75.193248181329, 19.956922916985857]),
        {
          "class": 1,
          "system:index": "277"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19247570513271, 19.95789103216696]),
        {
          "class": 1,
          "system:index": "278"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19260445116542, 19.957487651563387]),
        {
          "class": 1,
          "system:index": "279"
        }),
    ee.Feature(
        ee.Geometry.Point([75.19247570513271, 19.95708426992854]),
        {
          "class": 1,
          "system:index": "280"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26337185381435, 19.91831448593608]),
        {
          "class": 1,
          "system:index": "281"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26272812365077, 19.917911004247976]),
        {
          "class": 1,
          "system:index": "282"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26266375063442, 19.9182741378136]),
        {
          "class": 1,
          "system:index": "283"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26279249666713, 19.918213615610572]),
        {
          "class": 1,
          "system:index": "284"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26296415804408, 19.91823378968082]),
        {
          "class": 1,
          "system:index": "285"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26427307604335, 19.918839010591384]),
        {
          "class": 1,
          "system:index": "286"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26407995699428, 19.919605620419134]),
        {
          "class": 1,
          "system:index": "287"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26397266863368, 19.919464403098566]),
        {
          "class": 1,
          "system:index": "288"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26405849932216, 19.918758314603824]),
        {
          "class": 1,
          "system:index": "289"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2639941263058, 19.919343359580555]),
        {
          "class": 1,
          "system:index": "290"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2457121896603, 19.92309566554694]),
        {
          "class": 1,
          "system:index": "291"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2459482240536, 19.923236879623914]),
        {
          "class": 1,
          "system:index": "292"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24609842775844, 19.923176359320642]),
        {
          "class": 1,
          "system:index": "293"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26549616335414, 19.91994857624396]),
        {
          "class": 1,
          "system:index": "294"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26489534853481, 19.920009097782888]),
        {
          "class": 1,
          "system:index": "295"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26450911043666, 19.91994857624396]),
        {
          "class": 1,
          "system:index": "296"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26433744905971, 19.919343359580555]),
        {
          "class": 1,
          "system:index": "297"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26397266863368, 19.918637270545258]),
        {
          "class": 1,
          "system:index": "298"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26382246492885, 19.91908109830696]),
        {
          "class": 1,
          "system:index": "299"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26392975328945, 19.919282837786795]),
        {
          "class": 1,
          "system:index": "300"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40721421150265, 19.71904703738852]),
        {
          "class": 1,
          "system:index": "301"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40687088874874, 19.718461254858994]),
        {
          "class": 1,
          "system:index": "302"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40609841255245, 19.719249030866496]),
        {
          "class": 1,
          "system:index": "303"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40663485435543, 19.7183602576542]),
        {
          "class": 1,
          "system:index": "304"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40575508979855, 19.718824844267935]),
        {
          "class": 1,
          "system:index": "305"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40489678291378, 19.71937022683076]),
        {
          "class": 1,
          "system:index": "306"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40848021415768, 19.719552020604873]),
        {
          "class": 1,
          "system:index": "307"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40770773796139, 19.71880464487802]),
        {
          "class": 1,
          "system:index": "308"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40764336494503, 19.72070337637295]),
        {
          "class": 1,
          "system:index": "309"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40768628028927, 19.72179412681887]),
        {
          "class": 1,
          "system:index": "310"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40676360038815, 19.72268288093781]),
        {
          "class": 1,
          "system:index": "311"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4064846506506, 19.72330904564488]),
        {
          "class": 1,
          "system:index": "312"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40564780143795, 19.72258188640046]),
        {
          "class": 1,
          "system:index": "313"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40684943107662, 19.72112755798641]),
        {
          "class": 1,
          "system:index": "314"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4068279734045, 19.722137509677957]),
        {
          "class": 1,
          "system:index": "315"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40723566917477, 19.7216123355948]),
        {
          "class": 1,
          "system:index": "316"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4070425501257, 19.72013779913724]),
        {
          "class": 1,
          "system:index": "317"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40777211097775, 19.719996404515634]),
        {
          "class": 1,
          "system:index": "318"
        })]),
vegetation = 
/* color: #07c129 */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.26331164707683, 19.82450567268967]),
        {
          "class": 2,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26219584812664, 19.823617486189704]),
        {
          "class": 2,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26331164707683, 19.823496369464245]),
        {
          "class": 2,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26421286930584, 19.82478827644421]),
        {
          "class": 2,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26228167881511, 19.82305227401455]),
        {
          "class": 2,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25661685337566, 19.825999429700374]),
        {
          "class": 2,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25773265232586, 19.8271298310783]),
        {
          "class": 2,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25648810734295, 19.827735399937346]),
        {
          "class": 2,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25528647770427, 19.827210573726163]),
        {
          "class": 2,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25417067875408, 19.826403145401272]),
        {
          "class": 2,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25378444065593, 19.82583794313286]),
        {
          "class": 2,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25532939304851, 19.82583794313286]),
        {
          "class": 2,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25571563114666, 19.82499013596122]),
        {
          "class": 2,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25451400150799, 19.82450567268967]),
        {
          "class": 2,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25211074223064, 19.823859719363767]),
        {
          "class": 2,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25159575809978, 19.825797571465333]),
        {
          "class": 2,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25090911259197, 19.82478827644421]),
        {
          "class": 2,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25155284275554, 19.823859719363767]),
        {
          "class": 2,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25155284275554, 19.822648549801738]),
        {
          "class": 2,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25056578983806, 19.822042961559802]),
        {
          "class": 2,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24962165226482, 19.821396998225346]),
        {
          "class": 2,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25030829777263, 19.82155848930506]),
        {
          "class": 2,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25635936131023, 19.82390009152354]),
        {
          "class": 2,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25683143009685, 19.82567645640124]),
        {
          "class": 2,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25863387455486, 19.82523236704319]),
        {
          "class": 2,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25949218143963, 19.814694973746754]),
        {
          "class": 2,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26056506504558, 19.815785081303833]),
        {
          "class": 2,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26005008091472, 19.814331602900364]),
        {
          "class": 2,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2595780121281, 19.812837736252927]),
        {
          "class": 2,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25850512852215, 19.813160735636032]),
        {
          "class": 2,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25824763645672, 19.81417010447989]),
        {
          "class": 2,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25627353062175, 19.81659256356495]),
        {
          "class": 2,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25627353062175, 19.815785081303833]),
        {
          "class": 2,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25601603855633, 19.814896846080416]),
        {
          "class": 2,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26133754124187, 19.81340298474284]),
        {
          "class": 2,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26288249363445, 19.81364523348064]),
        {
          "class": 2,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26494243015789, 19.814533475695324]),
        {
          "class": 2,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26678778996013, 19.815179466916977]),
        {
          "class": 2,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26601531376384, 19.813604858716626]),
        {
          "class": 2,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26481368412517, 19.812716611315118]),
        {
          "class": 2,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26241042484783, 19.81146498155611]),
        {
          "class": 2,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2610371338322, 19.81372598297789]),
        {
          "class": 2,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26129462589763, 19.816229197054906]),
        {
          "class": 2,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25910594334148, 19.816229197054906]),
        {
          "class": 2,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25691726078533, 19.81586582971448]),
        {
          "class": 2,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25751807560466, 19.816511815523377]),
        {
          "class": 2,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25734641422771, 19.815502461543677]),
        {
          "class": 2,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25691726078533, 19.814654599249284]),
        {
          "class": 2,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25472857822918, 19.806296857610846]),
        {
          "class": 2,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25356986393474, 19.806700623340546]),
        {
          "class": 2,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25442817081951, 19.805812337382537]),
        {
          "class": 2,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25550105442547, 19.805731583867683]),
        {
          "class": 2,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25644519199871, 19.805973844289277]),
        {
          "class": 2,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25644519199871, 19.805085554273326]),
        {
          "class": 2,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2529690491154, 19.805206685022107]),
        {
          "class": 2,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2515099274113, 19.806458364025694]),
        {
          "class": 2,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25142409672283, 19.805570076715036]),
        {
          "class": 2,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25211074223064, 19.805206685022107]),
        {
          "class": 2,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2540848480656, 19.80443952205576]),
        {
          "class": 2,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25541522373699, 19.80423763644982]),
        {
          "class": 2,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45416712373137, 19.81564174587444]),
        {
          "class": 2,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45399546235441, 19.814592011858345]),
        {
          "class": 2,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45193552583098, 19.813824894156546]),
        {
          "class": 2,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45390963166594, 19.81358264569244]),
        {
          "class": 2,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45399546235441, 19.81245214798069]),
        {
          "class": 2,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4524075946176, 19.811523518848613]),
        {
          "class": 2,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45069098084807, 19.811523518848613]),
        {
          "class": 2,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45348047822355, 19.811725395208132]),
        {
          "class": 2,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45335173219084, 19.814713135367715]),
        {
          "class": 2,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45283674805998, 19.817297081588507]),
        {
          "class": 2,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45343756287932, 19.8177008193923]),
        {
          "class": 2,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45481085389494, 19.81604548788154]),
        {
          "class": 2,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45528292268156, 19.81362302046209]),
        {
          "class": 2,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45519709199309, 19.812936647984046]),
        {
          "class": 2,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45472502320646, 19.811563894141003]),
        {
          "class": 2,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4183328112924, 19.821011430709788]),
        {
          "class": 2,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42039274781584, 19.82194000442998]),
        {
          "class": 2,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42043566316008, 19.82327229637962]),
        {
          "class": 2,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42168020814299, 19.821818886426264]),
        {
          "class": 2,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4192340335214, 19.82044620926785]),
        {
          "class": 2,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4179894885385, 19.820203970891797]),
        {
          "class": 2,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4188907107675, 19.818669785938386]),
        {
          "class": 2,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42232393830656, 19.81854866544308]),
        {
          "class": 2,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42193770020842, 19.819800239444763]),
        {
          "class": 2,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42129397004484, 19.821455531861428]),
        {
          "class": 2,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42082190125822, 19.819033146870645]),
        {
          "class": 2,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42017817109465, 19.81778156683003]),
        {
          "class": 2,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42193770020842, 19.81834679774586]),
        {
          "class": 2,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42309641450285, 19.82331266868861]),
        {
          "class": 2,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42056440919279, 19.825250527460348]),
        {
          "class": 2,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41992067902922, 19.825250527460348]),
        {
          "class": 2,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41940569489836, 19.82545238639024]),
        {
          "class": 2,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41824698060393, 19.82609833324289]),
        {
          "class": 2,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41820406525969, 19.826744277469988]),
        {
          "class": 2,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4137408694589, 19.825492758145447]),
        {
          "class": 2,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41356920808195, 19.823918252092938]),
        {
          "class": 2,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44096656004062, 19.779922102738723]),
        {
          "class": 2,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44188923994174, 19.77996248604736]),
        {
          "class": 2,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44255442777744, 19.78038651017011]),
        {
          "class": 2,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4424042240726, 19.779821144422332]),
        {
          "class": 2,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4421681896793, 19.778569255984138]),
        {
          "class": 2,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4416102902042, 19.778569255984138]),
        {
          "class": 2,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44058032194248, 19.779033667358892]),
        {
          "class": 2,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.440494491254, 19.78056823444867]),
        {
          "class": 2,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44122405210605, 19.781537427100123]),
        {
          "class": 2,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44180340925327, 19.78157780999931]),
        {
          "class": 2,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44328398862949, 19.78151723564668]),
        {
          "class": 2,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44283337751499, 19.783213308813423]),
        {
          "class": 2,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4416102902042, 19.785111274040634]),
        {
          "class": 2,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44141717115512, 19.784283440924536]),
        {
          "class": 2,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.439593269025, 19.784020956355196]),
        {
          "class": 2,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4390353695499, 19.783516177121477]),
        {
          "class": 2,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43967909971347, 19.78816008572931]),
        {
          "class": 2,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43886370817295, 19.786867881279]),
        {
          "class": 2,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43766207853427, 19.787190933374546]),
        {
          "class": 2,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43551631132236, 19.787554366198737]),
        {
          "class": 2,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4361171261417, 19.78864465969495]),
        {
          "class": 2,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43609566846958, 19.789492660586696]),
        {
          "class": 2,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43755479017368, 19.788866755603074]),
        {
          "class": 2,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43639607587924, 19.787816844944867]),
        {
          "class": 2,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43912120023838, 19.787392840601502]),
        {
          "class": 2,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43922848859897, 19.78902827970535]),
        {
          "class": 2,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43907828489414, 19.789856088157894]),
        {
          "class": 2,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43976493040195, 19.79009837274453]),
        {
          "class": 2,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44047303358188, 19.790078182376398]),
        {
          "class": 2,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4403872028934, 19.787635128935925]),
        {
          "class": 2,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44113822141757, 19.786181393400152]),
        {
          "class": 2,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45718856016269, 19.780669192291633]),
        {
          "class": 2,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45609421888462, 19.78036631857081]),
        {
          "class": 2,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45519299665561, 19.77854906415453]),
        {
          "class": 2,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45598693052402, 19.778367337572888]),
        {
          "class": 2,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45673794904819, 19.778851941329982]),
        {
          "class": 2,
          "system:index": "131"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45654482999912, 19.779699994358218]),
        {
          "class": 2,
          "system:index": "132"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45424885908237, 19.778710598719755]),
        {
          "class": 2,
          "system:index": "133"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4545063511478, 19.77616641029547]),
        {
          "class": 2,
          "system:index": "134"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45476384321323, 19.77735774167848]),
        {
          "class": 2,
          "system:index": "135"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45521445432773, 19.77735774167848]),
        {
          "class": 2,
          "system:index": "136"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45721001783481, 19.7777211969374]),
        {
          "class": 2,
          "system:index": "137"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45740313688388, 19.778367337572888]),
        {
          "class": 2,
          "system:index": "138"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45622296491733, 19.7795384607961]),
        {
          "class": 2,
          "system:index": "139"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45512862363925, 19.77941731051702]),
        {
          "class": 2,
          "system:index": "140"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44615931669345, 19.77774138887192]),
        {
          "class": 2,
          "system:index": "141"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44682450452915, 19.776529868271716]),
        {
          "class": 2,
          "system:index": "142"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44718928495517, 19.77657025244013]),
        {
          "class": 2,
          "system:index": "143"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44684596220127, 19.775318338460384]),
        {
          "class": 2,
          "system:index": "144"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44615931669345, 19.77673178901141]),
        {
          "class": 2,
          "system:index": "145"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44530100980869, 19.777135629723247]),
        {
          "class": 2,
          "system:index": "146"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43770499387851, 19.776368331495725]),
        {
          "class": 2,
          "system:index": "147"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43684668699375, 19.777398125637085]),
        {
          "class": 2,
          "system:index": "148"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43620295683017, 19.777579853324106]),
        {
          "class": 2,
          "system:index": "149"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43588109174839, 19.77749908548879]),
        {
          "class": 2,
          "system:index": "150"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43613858381381, 19.778185610784004]),
        {
          "class": 2,
          "system:index": "151"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4389280811893, 19.775459684079657]),
        {
          "class": 2,
          "system:index": "152"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43933577695957, 19.774631800812074]),
        {
          "class": 2,
          "system:index": "153"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4384774700748, 19.775358722935824]),
        {
          "class": 2,
          "system:index": "154"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43781228223911, 19.775823143667818]),
        {
          "class": 2,
          "system:index": "155"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43809123197666, 19.777579853324106]),
        {
          "class": 2,
          "system:index": "156"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43776936689487, 19.778104843255743]),
        {
          "class": 2,
          "system:index": "157"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43472237745395, 19.77667121281638]),
        {
          "class": 2,
          "system:index": "158"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43497986951938, 19.77640871570508]),
        {
          "class": 2,
          "system:index": "159"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44075198331943, 19.781133597545253]),
        {
          "class": 2,
          "system:index": "160"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44006533781162, 19.781820107179463]),
        {
          "class": 2,
          "system:index": "161"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43980784574619, 19.781961447031016]),
        {
          "class": 2,
          "system:index": "162"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43924994627109, 19.782567187831614]),
        {
          "class": 2,
          "system:index": "163"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43806977430454, 19.784020956355196]),
        {
          "class": 2,
          "system:index": "164"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43549485365024, 19.784263249819176]),
        {
          "class": 2,
          "system:index": "165"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4355592266666, 19.784667071440115]),
        {
          "class": 2,
          "system:index": "166"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43710417905918, 19.784384396412946]),
        {
          "class": 2,
          "system:index": "167"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43753333250156, 19.785171847026536]),
        {
          "class": 2,
          "system:index": "168"
        })]),
bareland = 
/* color: #f0f0f0 */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.42095005845587, 19.773367439232093]),
        {
          "class": 3,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41846096849005, 19.772640508025695]),
        {
          "class": 3,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41910469865363, 19.772640508025695]),
        {
          "class": 3,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41996300553839, 19.772802048580317]),
        {
          "class": 3,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4223233494715, 19.77308474415692]),
        {
          "class": 3,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4232245717005, 19.77401359752101]),
        {
          "class": 3,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42399704789679, 19.775225137251535]),
        {
          "class": 3,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42571366166632, 19.77615397814067]),
        {
          "class": 3,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4255849156336, 19.775427059644496]),
        {
          "class": 3,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4257994923548, 19.77671935690075]),
        {
          "class": 3,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4257994923548, 19.778173178786734]),
        {
          "class": 3,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42506993150275, 19.77837509744403]),
        {
          "class": 3,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.426915291305, 19.778577015845435]),
        {
          "class": 3,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42751610612433, 19.778617399495015]),
        {
          "class": 3,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42897522782843, 19.778940468323125]),
        {
          "class": 3,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42970478868048, 19.778617399495015]),
        {
          "class": 3,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43043434953253, 19.7775360924936]),
        {
          "class": 3,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42966187333624, 19.7756784214136]),
        {
          "class": 3,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42597115373175, 19.775597652614515]),
        {
          "class": 3,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42773068284552, 19.77519380800506]),
        {
          "class": 3,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42785942887824, 19.775597652614515]),
        {
          "class": 3,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4283744130091, 19.776526491332362]),
        {
          "class": 3,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42944729661505, 19.77709186877073]),
        {
          "class": 3,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42923271989386, 19.778424536223994]),
        {
          "class": 3,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42738736009161, 19.7775360924936]),
        {
          "class": 3,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42622864579718, 19.776163033348407]),
        {
          "class": 3,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42695820664923, 19.77519380800506]),
        {
          "class": 3,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4267007145838, 19.774345730994042]),
        {
          "class": 3,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42541325425665, 19.77373995893737]),
        {
          "class": 3,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4221087727503, 19.774224576766915]),
        {
          "class": 3,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42455494737189, 19.773376494598168]),
        {
          "class": 3,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42331040238898, 19.772649563433067]),
        {
          "class": 3,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42537033891242, 19.77220532608892]),
        {
          "class": 3,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42511284684699, 19.77147838958231]),
        {
          "class": 3,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42485535478156, 19.770912992229537]),
        {
          "class": 3,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42258084153693, 19.76949949007364]),
        {
          "class": 3,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42253792619269, 19.769620647892413]),
        {
          "class": 3,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42537033891242, 19.770024506623276]),
        {
          "class": 3,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42425453996222, 19.769337946172048]),
        {
          "class": 3,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42657196855109, 19.77042836433094]),
        {
          "class": 3,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43253720140021, 19.774911116169513]),
        {
          "class": 3,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42974770402472, 19.775072654422647]),
        {
          "class": 3,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42592823838751, 19.77345726452295]),
        {
          "class": 3,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42219460343878, 19.77535534597165]),
        {
          "class": 3,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42103588914435, 19.775395730437715]),
        {
          "class": 3,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41781723832648, 19.774951500748145]),
        {
          "class": 3,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41781723832648, 19.774870731580652]),
        {
          "class": 3,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42000592088263, 19.77551688377449]),
        {
          "class": 3,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41790306901495, 19.774426500427634]),
        {
          "class": 3,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41764557694952, 19.773861113532917]),
        {
          "class": 3,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41549980973761, 19.772891874189817]),
        {
          "class": 3,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41378319596808, 19.774305346261905]),
        {
          "class": 3,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40992081498663, 19.776768796194432]),
        {
          "class": 3,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41125119065802, 19.775395730437715]),
        {
          "class": 3,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41137993669074, 19.77575919017174]),
        {
          "class": 3,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41137993669074, 19.77345726452295]),
        {
          "class": 3,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4122382435755, 19.773497649470006]),
        {
          "class": 3,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41228115891974, 19.7731745696071]),
        {
          "class": 3,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41421234941046, 19.77123607667669]),
        {
          "class": 3,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41301071977179, 19.77058990712752]),
        {
          "class": 3,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41103661393683, 19.76978219150754]),
        {
          "class": 3,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4093200001673, 19.770509135749695]),
        {
          "class": 3,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40790379380744, 19.771963014288417]),
        {
          "class": 3,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4078608784632, 19.77244763752104]),
        {
          "class": 3,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40704548692267, 19.771639931314727]),
        {
          "class": 3,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40691674088995, 19.77067067846442]),
        {
          "class": 3,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40481388902228, 19.773376494598168]),
        {
          "class": 3,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40228188371222, 19.776163033348407]),
        {
          "class": 3,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40365517472785, 19.776163033348407]),
        {
          "class": 3,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4032689366297, 19.777495708569976]),
        {
          "class": 3,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40022194718878, 19.778061082569423]),
        {
          "class": 3,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39902031755011, 19.77830338509792]),
        {
          "class": 3,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39837658738654, 19.779191824549933]),
        {
          "class": 3,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39738953446906, 19.779191824549933]),
        {
          "class": 3,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39490044450324, 19.780241792060632]),
        {
          "class": 3,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3919392857508, 19.78044370809633]),
        {
          "class": 3,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39288342332404, 19.781735964664737]),
        {
          "class": 3,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39288342332404, 19.78157443316695]),
        {
          "class": 3,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39455712174933, 19.78157443316695]),
        {
          "class": 3,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39799034928839, 19.78157443316695]),
        {
          "class": 3,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39747536515753, 19.7814532844361]),
        {
          "class": 3,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39236843919318, 19.781251369679982]),
        {
          "class": 3,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39086640214484, 19.782139792692657]),
        {
          "class": 3,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39060891007941, 19.78108983769081]),
        {
          "class": 3,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39000809526007, 19.780605240740613]),
        {
          "class": 3,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39022267198126, 19.77830338509792]),
        {
          "class": 3,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39099514817755, 19.778787989049512]),
        {
          "class": 3,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39434254502814, 19.778989906927677]),
        {
          "class": 3,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3931838307337, 19.778222617629368]),
        {
          "class": 3,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39159596299689, 19.777818779672447]),
        {
          "class": 3,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39030850266974, 19.7775360924936]),
        {
          "class": 3,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38949311112921, 19.777374556737666]),
        {
          "class": 3,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38872063493292, 19.77709186877073]),
        {
          "class": 3,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38794815873663, 19.776163033348407]),
        {
          "class": 3,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38820565080206, 19.77551688377449]),
        {
          "class": 3,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3891497883753, 19.775072654422647]),
        {
          "class": 3,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39258301591437, 19.77470919312282]),
        {
          "class": 3,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39052307939093, 19.778424536223994]),
        {
          "class": 3,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39129555558722, 19.776486107152852]),
        {
          "class": 3,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39309800004523, 19.77628418610184]),
        {
          "class": 3,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39550125932257, 19.776647643809458]),
        {
          "class": 3,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39910614823859, 19.77713225279672]),
        {
          "class": 3,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39807617997687, 19.775839958888945]),
        {
          "class": 3,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39635956620734, 19.774426500427634]),
        {
          "class": 3,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39421379899542, 19.772770718857497]),
        {
          "class": 3,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.396659973617, 19.772932259280125]),
        {
          "class": 3,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39996445512335, 19.773497649470006]),
        {
          "class": 3,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3974324498133, 19.776809180302305]),
        {
          "class": 3,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4029256138758, 19.77503226987471]),
        {
          "class": 3,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4018098149256, 19.775314961495344]),
        {
          "class": 3,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40060818528693, 19.77592072756522]),
        {
          "class": 3,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40219605302374, 19.778747605443172]),
        {
          "class": 3,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40219605302374, 19.779232208043677]),
        {
          "class": 3,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40489971971076, 19.78121098669804]),
        {
          "class": 3,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40279686784308, 19.781614816056745]),
        {
          "class": 3,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40335476731818, 19.780039875769045]),
        {
          "class": 3,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40704548692267, 19.77834376881685]),
        {
          "class": 3,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40434182023566, 19.778747605443172]),
        {
          "class": 3,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40781796311896, 19.77761686031016]),
        {
          "class": 3,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40798962449591, 19.778949523372507]),
        {
          "class": 3,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41052162980597, 19.780484091272754]),
        {
          "class": 3,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41210949754279, 19.780726390116353]),
        {
          "class": 3,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41451275682013, 19.779918725871262]),
        {
          "class": 3,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41502774095099, 19.779191824549933]),
        {
          "class": 3,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41318238114874, 19.778020698778843]),
        {
          "class": 3,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41090786790411, 19.776970716631393]),
        {
          "class": 3,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40541470384161, 19.775880343232203]),
        {
          "class": 3,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40575802659552, 19.774547654501255]),
        {
          "class": 3,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41065037583869, 19.772609178271136]),
        {
          "class": 3,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41095078324835, 19.772245711353193]),
        {
          "class": 3,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41232407426398, 19.768974471794888]),
        {
          "class": 3,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41558564042609, 19.765945486424492]),
        {
          "class": 3,
          "system:index": "131"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41464150285285, 19.765985873274627]),
        {
          "class": 3,
          "system:index": "132"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41751683091681, 19.76586471269354]),
        {
          "class": 3,
          "system:index": "133"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41889012193244, 19.767641725321784]),
        {
          "class": 3,
          "system:index": "134"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41807473039191, 19.768610996589004]),
        {
          "class": 3,
          "system:index": "135"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4200917515711, 19.770064892440075]),
        {
          "class": 3,
          "system:index": "136"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42167961930792, 19.77168031672225]),
        {
          "class": 3,
          "system:index": "137"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42386830186408, 19.776809180302305]),
        {
          "class": 3,
          "system:index": "138"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42386830186408, 19.777293788798296]),
        {
          "class": 3,
          "system:index": "139"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42356789445441, 19.7795148922133]),
        {
          "class": 3,
          "system:index": "140"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42356789445441, 19.780645623876104]),
        {
          "class": 3,
          "system:index": "141"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42099297380011, 19.781655198936313]),
        {
          "class": 3,
          "system:index": "142"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41944802140753, 19.78169558180564]),
        {
          "class": 3,
          "system:index": "143"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42150795793097, 19.782099409935938]),
        {
          "class": 3,
          "system:index": "144"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42674362992804, 19.783795476904146]),
        {
          "class": 3,
          "system:index": "145"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42747319078009, 19.784360828547094]),
        {
          "class": 3,
          "system:index": "146"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42846024369757, 19.78262438497488]),
        {
          "class": 3,
          "system:index": "147"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42811692094367, 19.78137251856436]),
        {
          "class": 3,
          "system:index": "148"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42751610612433, 19.781130220703453]),
        {
          "class": 3,
          "system:index": "149"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42618573045294, 19.782099409935938]),
        {
          "class": 3,
          "system:index": "150"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42459786271613, 19.780968688591464]),
        {
          "class": 3,
          "system:index": "151"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4263573918299, 19.780161025574717]),
        {
          "class": 3,
          "system:index": "152"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42708695268195, 19.780282175288242]),
        {
          "class": 3,
          "system:index": "153"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42888939713995, 19.78040332490966]),
        {
          "class": 3,
          "system:index": "154"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43172180985968, 19.78084753939997]),
        {
          "class": 3,
          "system:index": "155"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43262303208869, 19.78137251856436]),
        {
          "class": 3,
          "system:index": "156"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43464005326788, 19.781937878806666]),
        {
          "class": 3,
          "system:index": "157"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43442547654669, 19.78121098669804]),
        {
          "class": 3,
          "system:index": "158"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43403923844855, 19.78108983769081]),
        {
          "class": 3,
          "system:index": "159"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37586654084723, 19.805347786577443]),
        {
          "class": 3,
          "system:index": "160"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3744932498316, 19.800179463910297]),
        {
          "class": 3,
          "system:index": "161"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37380660432379, 19.805509293955772]),
        {
          "class": 3,
          "system:index": "162"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37226165193121, 19.804863263458785]),
        {
          "class": 3,
          "system:index": "163"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37020171540777, 19.80203684919245]),
        {
          "class": 3,
          "system:index": "164"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36668265718023, 19.802359870506766]),
        {
          "class": 3,
          "system:index": "165"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3671976413111, 19.803167420923746]),
        {
          "class": 3,
          "system:index": "166"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37028754609625, 19.80575155471583]),
        {
          "class": 3,
          "system:index": "167"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36977256196539, 19.810677443488142]),
        {
          "class": 3,
          "system:index": "168"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36264861482184, 19.80785113251648]),
        {
          "class": 3,
          "system:index": "169"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36256278413336, 19.80833564653529]),
        {
          "class": 3,
          "system:index": "170"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3609320010523, 19.804297984622107]),
        {
          "class": 3,
          "system:index": "171"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36213363069098, 19.803086666066484]),
        {
          "class": 3,
          "system:index": "172"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35921538728277, 19.799937194666583]),
        {
          "class": 3,
          "system:index": "173"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35844291108648, 19.802198359931573]),
        {
          "class": 3,
          "system:index": "174"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35715545075934, 19.807528122350757]),
        {
          "class": 3,
          "system:index": "175"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35784209626715, 19.81027368785257]),
        {
          "class": 3,
          "system:index": "176"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35612548249762, 19.810192936602462]),
        {
          "class": 3,
          "system:index": "177"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35586799043219, 19.809627676703837]),
        {
          "class": 3,
          "system:index": "178"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35526717561285, 19.808497150880275]),
        {
          "class": 3,
          "system:index": "179"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35346473115484, 19.807285864296045]),
        {
          "class": 3,
          "system:index": "180"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3521772708277, 19.80946617350669]),
        {
          "class": 3,
          "system:index": "181"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35174811738531, 19.812776956270746]),
        {
          "class": 3,
          "system:index": "182"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3507181491236, 19.812292455780895]),
        {
          "class": 3,
          "system:index": "183"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34573996919195, 19.810192936602462]),
        {
          "class": 3,
          "system:index": "184"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34359420198004, 19.80890091102535]),
        {
          "class": 3,
          "system:index": "185"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34857238191168, 19.806397581605815]),
        {
          "class": 3,
          "system:index": "186"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34874404328863, 19.804378738864582]),
        {
          "class": 3,
          "system:index": "187"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34754241364996, 19.804297984622107]),
        {
          "class": 3,
          "system:index": "188"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34548247712652, 19.80340968524965]),
        {
          "class": 3,
          "system:index": "189"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34307921784918, 19.802682891165375]),
        {
          "class": 3,
          "system:index": "190"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34428084748785, 19.798645085804687]),
        {
          "class": 3,
          "system:index": "191"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34453833955328, 19.798645085804687]),
        {
          "class": 3,
          "system:index": "192"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35200560945074, 19.794607178002455]),
        {
          "class": 3,
          "system:index": "193"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35037482636969, 19.79929114154692]),
        {
          "class": 3,
          "system:index": "194"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35492385285895, 19.799210384722564]),
        {
          "class": 3,
          "system:index": "195"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35526717561285, 19.80413647601415]),
        {
          "class": 3,
          "system:index": "196"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35852874177496, 19.805428540287114]),
        {
          "class": 3,
          "system:index": "197"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36505187409918, 19.799533411774124]),
        {
          "class": 3,
          "system:index": "198"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3686567630152, 19.800179463910297]),
        {
          "class": 3,
          "system:index": "199"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36882842439215, 19.797514481945413]),
        {
          "class": 3,
          "system:index": "200"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37234748261969, 19.792668945875274]),
        {
          "class": 3,
          "system:index": "201"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37243331330816, 19.796787660937845]),
        {
          "class": 3,
          "system:index": "202"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37097419160406, 19.79775675487707]),
        {
          "class": 3,
          "system:index": "203"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36822760957281, 19.79525325013416]),
        {
          "class": 3,
          "system:index": "204"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22876732115844, 19.88529651702996]),
        {
          "class": 3,
          "system:index": "205"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22863857512573, 19.886628277118355]),
        {
          "class": 3,
          "system:index": "206"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22812359099487, 19.88574043830352]),
        {
          "class": 3,
          "system:index": "207"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22786609892944, 19.884852594512317]),
        {
          "class": 3,
          "system:index": "208"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22855274443725, 19.883924388864532]),
        {
          "class": 3,
          "system:index": "209"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22923938994506, 19.88311724909782]),
        {
          "class": 3,
          "system:index": "210"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23069851164917, 19.88271367767235]),
        {
          "class": 3,
          "system:index": "211"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23172847991088, 19.88291546351359]),
        {
          "class": 3,
          "system:index": "212"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2329730248938, 19.883399748483942]),
        {
          "class": 3,
          "system:index": "213"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23546211485962, 19.88396474574492]),
        {
          "class": 3,
          "system:index": "214"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2362345910559, 19.885377230081325]),
        {
          "class": 3,
          "system:index": "215"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23670665984253, 19.888081093535256]),
        {
          "class": 3,
          "system:index": "216"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2362345910559, 19.888888208008595]),
        {
          "class": 3,
          "system:index": "217"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23464672331909, 19.888888208008595]),
        {
          "class": 3,
          "system:index": "218"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23288719420532, 19.888040737703637]),
        {
          "class": 3,
          "system:index": "219"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23069851164917, 19.886224714637624]),
        {
          "class": 3,
          "system:index": "220"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23065559630493, 19.885901863912732]),
        {
          "class": 3,
          "system:index": "221"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23172847991088, 19.885780794721256]),
        {
          "class": 3,
          "system:index": "222"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23353092436889, 19.886547564704475]),
        {
          "class": 3,
          "system:index": "223"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23430340056518, 19.887596822876983]),
        {
          "class": 3,
          "system:index": "224"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23430340056518, 19.888403939818176]),
        {
          "class": 3,
          "system:index": "225"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23164264922241, 19.88925140817964]),
        {
          "class": 3,
          "system:index": "226"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23009769682983, 19.888686429775866]),
        {
          "class": 3,
          "system:index": "227"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22915355925659, 19.888444295557267]),
        {
          "class": 3,
          "system:index": "228"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22460453276733, 19.887677534756182]),
        {
          "class": 3,
          "system:index": "229"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2246903634558, 19.88900927482482]),
        {
          "class": 3,
          "system:index": "230"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22130005126098, 19.888000381861712]),
        {
          "class": 3,
          "system:index": "231"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22258751158813, 19.887758246594256]),
        {
          "class": 3,
          "system:index": "232"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22305958037475, 19.886789701822757]),
        {
          "class": 3,
          "system:index": "233"
        }),
    ee.Feature(
        ee.Geometry.Point([75.224003717948, 19.887112550738006]),
        {
          "class": 3,
          "system:index": "234"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22387497191528, 19.885982576655646]),
        {
          "class": 3,
          "system:index": "235"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22408954863647, 19.88525616048886]),
        {
          "class": 3,
          "system:index": "236"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22464744811157, 19.884368313983334]),
        {
          "class": 3,
          "system:index": "237"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22421829466919, 19.882390819791794]),
        {
          "class": 3,
          "system:index": "238"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22567741637329, 19.88404545947485]),
        {
          "class": 3,
          "system:index": "239"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22567741637329, 19.886830057973146]),
        {
          "class": 3,
          "system:index": "240"
        }),
    ee.Feature(
        ee.Geometry.Point([75.226707384635, 19.88533687356078]),
        {
          "class": 3,
          "system:index": "241"
        }),
    ee.Feature(
        ee.Geometry.Point([75.226707384635, 19.88509473422161]),
        {
          "class": 3,
          "system:index": "242"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22675029997924, 19.890179582610283]),
        {
          "class": 3,
          "system:index": "243"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22881023650268, 19.89143059171368]),
        {
          "class": 3,
          "system:index": "244"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2283810830603, 19.892560526925234]),
        {
          "class": 3,
          "system:index": "245"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22846691374878, 19.89639417558808]),
        {
          "class": 3,
          "system:index": "246"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22979728942016, 19.89744336851601]),
        {
          "class": 3,
          "system:index": "247"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23168556456665, 19.90099443144088]),
        {
          "class": 3,
          "system:index": "248"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2309560037146, 19.898896085705296]),
        {
          "class": 3,
          "system:index": "249"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23138515715698, 19.89663629765018]),
        {
          "class": 3,
          "system:index": "250"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22936813597778, 19.893407973042432]),
        {
          "class": 3,
          "system:index": "251"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23009769682983, 19.893044782404733]),
        {
          "class": 3,
          "system:index": "252"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22966854338745, 19.887072194659588]),
        {
          "class": 3,
          "system:index": "253"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22696487670044, 19.887354686992577]),
        {
          "class": 3,
          "system:index": "254"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22254459624389, 19.88122045445942]),
        {
          "class": 3,
          "system:index": "255"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22112838988403, 19.881664387154938]),
        {
          "class": 3,
          "system:index": "256"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21954052214721, 19.881018666459347]),
        {
          "class": 3,
          "system:index": "257"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21932594542602, 19.88126081202859]),
        {
          "class": 3,
          "system:index": "258"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21842472319702, 19.88065544741161]),
        {
          "class": 3,
          "system:index": "259"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24121277098754, 19.886144002018092]),
        {
          "class": 3,
          "system:index": "260"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24177067046264, 19.885014021026304]),
        {
          "class": 3,
          "system:index": "261"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24267189269165, 19.88509473422161]),
        {
          "class": 3,
          "system:index": "262"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24400226836303, 19.886103645692913]),
        {
          "class": 3,
          "system:index": "263"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2463196969519, 19.886749345662075]),
        {
          "class": 3,
          "system:index": "264"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24662010436157, 19.884449027507642]),
        {
          "class": 3,
          "system:index": "265"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24782173400024, 19.884287600417903]),
        {
          "class": 3,
          "system:index": "266"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24872295622924, 19.883641890413962]),
        {
          "class": 3,
          "system:index": "267"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24812214140991, 19.88218903328232]),
        {
          "class": 3,
          "system:index": "268"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24765007262329, 19.881785459492377]),
        {
          "class": 3,
          "system:index": "269"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2463196969519, 19.881422242202493]),
        {
          "class": 3,
          "system:index": "270"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24421684508422, 19.88186617433261]),
        {
          "class": 3,
          "system:index": "271"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24460308318237, 19.88222939060478]),
        {
          "class": 3,
          "system:index": "272"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24400226836303, 19.883843675072924]),
        {
          "class": 3,
          "system:index": "273"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24314396147827, 19.883803318161696]),
        {
          "class": 3,
          "system:index": "274"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2434014535437, 19.885377230081325]),
        {
          "class": 3,
          "system:index": "275"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24537555937866, 19.885619368988657]),
        {
          "class": 3,
          "system:index": "276"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2443026757727, 19.887314330975848]),
        {
          "class": 3,
          "system:index": "277"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24305813078979, 19.888000381861712]),
        {
          "class": 3,
          "system:index": "278"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24275772338012, 19.889897095315966]),
        {
          "class": 3,
          "system:index": "279"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24357311492065, 19.890341003695088]),
        {
          "class": 3,
          "system:index": "280"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24417392973999, 19.889977806022905]),
        {
          "class": 3,
          "system:index": "281"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24473182921508, 19.889937450674573]),
        {
          "class": 3,
          "system:index": "282"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24533264403442, 19.88925140817964]),
        {
          "class": 3,
          "system:index": "283"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2408265328894, 19.889977806022905]),
        {
          "class": 3,
          "system:index": "284"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23885242705444, 19.889533896625714]),
        {
          "class": 3,
          "system:index": "285"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23812286620239, 19.889170697102497]),
        {
          "class": 3,
          "system:index": "286"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23773662810424, 19.88896891922969]),
        {
          "class": 3,
          "system:index": "287"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2370070672522, 19.886789701822757]),
        {
          "class": 3,
          "system:index": "288"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23782245879272, 19.886951126362636]),
        {
          "class": 3,
          "system:index": "289"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23885242705444, 19.886910770243087]),
        {
          "class": 3,
          "system:index": "290"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23953907256225, 19.886870414113258]),
        {
          "class": 3,
          "system:index": "291"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24198524718383, 19.888565362712846]),
        {
          "class": 3,
          "system:index": "292"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23100430389664, 19.884564400737897]),
        {
          "class": 3,
          "system:index": "293"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23218447586319, 19.884443330524192]),
        {
          "class": 3,
          "system:index": "294"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23402983566544, 19.88500832406317]),
        {
          "class": 3,
          "system:index": "295"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2348881425502, 19.884342438608748]),
        {
          "class": 3,
          "system:index": "296"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23357922455094, 19.88230440815847]),
        {
          "class": 3,
          "system:index": "297"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23460919281266, 19.88282905216643]),
        {
          "class": 3,
          "system:index": "298"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23469502350113, 19.885795275991423]),
        {
          "class": 3,
          "system:index": "299"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23707682510636, 19.88609794876896]),
        {
          "class": 3,
          "system:index": "300"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23784930130265, 19.88529082007698]),
        {
          "class": 3,
          "system:index": "301"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23868615051529, 19.88601723608484]),
        {
          "class": 3,
          "system:index": "302"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23879343887589, 19.88714720991993]),
        {
          "class": 3,
          "system:index": "303"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23832137008927, 19.888579843728426]),
        {
          "class": 3,
          "system:index": "304"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23677641769669, 19.88948784436225]),
        {
          "class": 3,
          "system:index": "305"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2351027192714, 19.890153708185057]),
        {
          "class": 3,
          "system:index": "306"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2325277986171, 19.890294951666323]),
        {
          "class": 3,
          "system:index": "307"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23319298645279, 19.891061699795088]),
        {
          "class": 3,
          "system:index": "308"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23319298645279, 19.890375662170495]),
        {
          "class": 3,
          "system:index": "309"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23407275100968, 19.890214241121033]),
        {
          "class": 3,
          "system:index": "310"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23244196792862, 19.889790510083323]),
        {
          "class": 3,
          "system:index": "311"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23147637268326, 19.890395839790116]),
        {
          "class": 3,
          "system:index": "312"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23109013458512, 19.889992286909344]),
        {
          "class": 3,
          "system:index": "313"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2306180657985, 19.89023441876121]),
        {
          "class": 3,
          "system:index": "314"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22922331711075, 19.890214241121033]),
        {
          "class": 3,
          "system:index": "315"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22980267425797, 19.89051690545382]),
        {
          "class": 3,
          "system:index": "316"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22930914779923, 19.889992286909344]),
        {
          "class": 3,
          "system:index": "317"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22836501022599, 19.889366777911867]),
        {
          "class": 3,
          "system:index": "318"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22664839645645, 19.88714720991993]),
        {
          "class": 3,
          "system:index": "319"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22877270599625, 19.88718756597923]),
        {
          "class": 3,
          "system:index": "320"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22802168747208, 19.888196464120014]),
        {
          "class": 3,
          "system:index": "321"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22778565307877, 19.88718756597923]),
        {
          "class": 3,
          "system:index": "322"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22609049698136, 19.886118126933575]),
        {
          "class": 3,
          "system:index": "323"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22774273773453, 19.88652168968587]),
        {
          "class": 3,
          "system:index": "324"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22729212662003, 19.885855810593196]),
        {
          "class": 3,
          "system:index": "325"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22712046524308, 19.884080119327884]),
        {
          "class": 3,
          "system:index": "326"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22825772186539, 19.88351512247838]),
        {
          "class": 3,
          "system:index": "327"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22785002609513, 19.883071194968732]),
        {
          "class": 3,
          "system:index": "328"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22660548111222, 19.883030837860716]),
        {
          "class": 3,
          "system:index": "329"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22587592026017, 19.884826719216843]),
        {
          "class": 3,
          "system:index": "330"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2255755128505, 19.885674206718477]),
        {
          "class": 3,
          "system:index": "331"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22619778534195, 19.88650151157267]),
        {
          "class": 3,
          "system:index": "332"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2273779573085, 19.882728159222903]),
        {
          "class": 3,
          "system:index": "333"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22830063720963, 19.882486015896305]),
        {
          "class": 3,
          "system:index": "334"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22920185943863, 19.88173940497615]),
        {
          "class": 3,
          "system:index": "335"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2308541001918, 19.88173940497615]),
        {
          "class": 3,
          "system:index": "336"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23076826950333, 19.88131565126715]),
        {
          "class": 3,
          "system:index": "337"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22967392822525, 19.881335830040904]),
        {
          "class": 3,
          "system:index": "338"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22965247055313, 19.880286530398287]),
        {
          "class": 3,
          "system:index": "339"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23070389648697, 19.88085153876164]),
        {
          "class": 3,
          "system:index": "340"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23224884887955, 19.881577975125406]),
        {
          "class": 3,
          "system:index": "341"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23402983566544, 19.881557796382506]),
        {
          "class": 3,
          "system:index": "342"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23482376953385, 19.88224387219959]),
        {
          "class": 3,
          "system:index": "343"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23651892563126, 19.882425480006827]),
        {
          "class": 3,
          "system:index": "344"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23636872192642, 19.882909766474977]),
        {
          "class": 3,
          "system:index": "345"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23793513199112, 19.884826719216843]),
        {
          "class": 3,
          "system:index": "346"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23849303146622, 19.88496796744865]),
        {
          "class": 3,
          "system:index": "347"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23922259231827, 19.885532959116404]),
        {
          "class": 3,
          "system:index": "348"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23793513199112, 19.884221368225408]),
        {
          "class": 3,
          "system:index": "349"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23538166900894, 19.88652168968587]),
        {
          "class": 3,
          "system:index": "350"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2349954309108, 19.886703292588944]),
        {
          "class": 3,
          "system:index": "351"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23257071396134, 19.88706649777047]),
        {
          "class": 3,
          "system:index": "352"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23209864517472, 19.886360264708333]),
        {
          "class": 3,
          "system:index": "353"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23227030655167, 19.885875988788648]),
        {
          "class": 3,
          "system:index": "354"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23068243881485, 19.884907432507575]),
        {
          "class": 3,
          "system:index": "355"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22969538589737, 19.88525046353443]),
        {
          "class": 3,
          "system:index": "356"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23048931976578, 19.884281903428636]),
        {
          "class": 3,
          "system:index": "357"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23008162399552, 19.883858156520184]),
        {
          "class": 3,
          "system:index": "358"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23254925628922, 19.88440297376572]),
        {
          "class": 3,
          "system:index": "359"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23291403671524, 19.885028502366584]),
        {
          "class": 3,
          "system:index": "360"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23473793884537, 19.886703292588944]),
        {
          "class": 3,
          "system:index": "361"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23113304992935, 19.88860002157684]),
        {
          "class": 3,
          "system:index": "362"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23038203140518, 19.887913973288395]),
        {
          "class": 3,
          "system:index": "363"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23042494674942, 19.887853439473215]),
        {
          "class": 3,
          "system:index": "364"
        }),
    ee.Feature(
        ee.Geometry.Point([75.23029620071671, 19.88712703188642]),
        {
          "class": 3,
          "system:index": "365"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22699171921036, 19.888842155557377]),
        {
          "class": 3,
          "system:index": "366"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22697026153824, 19.8900124645778]),
        {
          "class": 3,
          "system:index": "367"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22529656311295, 19.88815610831778]),
        {
          "class": 3,
          "system:index": "368"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22697026153824, 19.889084289167698]),
        {
          "class": 3,
          "system:index": "369"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22750670334122, 19.889427311148623]),
        {
          "class": 3,
          "system:index": "370"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22776419540665, 19.890375662170495]),
        {
          "class": 3,
          "system:index": "371"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22851521393082, 19.890880101889582]),
        {
          "class": 3,
          "system:index": "372"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22802168747208, 19.8914854274314]),
        {
          "class": 3,
          "system:index": "373"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2291589440944, 19.89194950877975]),
        {
          "class": 3,
          "system:index": "374"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2314119996669, 19.89122311998071]),
        {
          "class": 3,
          "system:index": "375"
        })]),
buildup = 
/* color: #ff1000 */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.33113607688978, 19.846679208011288]),
        {
          "class": 4,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33113607688978, 19.845508579102315]),
        {
          "class": 4,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32963403984144, 19.84340949875242]),
        {
          "class": 4,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32924780174329, 19.84405537258532]),
        {
          "class": 4,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32680162712171, 19.848172756499583]),
        {
          "class": 4,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3270162038429, 19.84583151207736]),
        {
          "class": 4,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32482752128675, 19.845347112368437]),
        {
          "class": 4,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32495626731946, 19.844580143139815]),
        {
          "class": 4,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32718786521986, 19.84506454518899]),
        {
          "class": 4,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33036360069349, 19.846356276760705]),
        {
          "class": 4,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33165106102064, 19.844257207619243]),
        {
          "class": 4,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33135065361097, 19.842803989647823]),
        {
          "class": 4,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3356421880348, 19.842198478233993]),
        {
          "class": 4,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33517011924818, 19.844903078003483]),
        {
          "class": 4,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33268102928236, 19.847082871150683]),
        {
          "class": 4,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33538469596937, 19.846719574371424]),
        {
          "class": 4,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33388265892103, 19.844903078003483]),
        {
          "class": 4,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33349642082288, 19.846073711377535]),
        {
          "class": 4,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33358225151136, 19.84122965516883]),
        {
          "class": 4,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33521303459241, 19.841027816286203]),
        {
          "class": 4,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33594259544446, 19.842844356993307]),
        {
          "class": 4,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33989080711439, 19.84122965516883]),
        {
          "class": 4,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34401068016126, 19.840745241419526]),
        {
          "class": 4,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34761556907728, 19.84122965516883]),
        {
          "class": 4,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34761556907728, 19.842158110724302]),
        {
          "class": 4,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34838804527357, 19.84417647363646]),
        {
          "class": 4,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34855970665052, 19.84631591030818]),
        {
          "class": 4,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34714350029066, 19.846961772316643]),
        {
          "class": 4,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3466285161598, 19.84680030706088]),
        {
          "class": 4,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34624227806165, 19.84522601221027]),
        {
          "class": 4,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34632810875013, 19.84409573961262]),
        {
          "class": 4,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35087713523939, 19.840503033990707]),
        {
          "class": 4,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35349497123792, 19.842844356993307]),
        {
          "class": 4,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35276541038587, 19.84405537258532]),
        {
          "class": 4,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35276541038587, 19.845548945760115]),
        {
          "class": 4,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35203584953382, 19.845791145491393]),
        {
          "class": 4,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35564073844984, 19.84659847526023]),
        {
          "class": 4,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3564990453346, 19.845589312407654]),
        {
          "class": 4,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35920271202161, 19.84405537258532]),
        {
          "class": 4,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35804399772718, 19.844136106629666]),
        {
          "class": 4,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3579581670387, 19.84046266604999]),
        {
          "class": 4,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35654196067884, 19.839978249960865]),
        {
          "class": 4,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39370664878919, 19.844721659795248]),
        {
          "class": 4,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39211878105237, 19.84488312716526]),
        {
          "class": 4,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3848660878761, 19.845973027617283]),
        {
          "class": 4,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38748392387464, 19.84552899500306]),
        {
          "class": 4,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38096079155042, 19.846739990116436]),
        {
          "class": 4,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37739881797864, 19.84778951174183]),
        {
          "class": 4,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37357935234144, 19.848152806072292]),
        {
          "class": 4,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36967405601575, 19.848758294775283]),
        {
          "class": 4,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3651250295265, 19.849767437480647]),
        {
          "class": 4,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3608764104469, 19.850332554592992]),
        {
          "class": 4,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35611280723646, 19.850494016255503]),
        {
          "class": 4,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35306581779554, 19.850615112394582]),
        {
          "class": 4,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3484309606178, 19.850292189151705]),
        {
          "class": 4,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34452566429212, 19.85004999628835]),
        {
          "class": 4,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34216532035902, 19.849848168619904]),
        {
          "class": 4,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33928999229505, 19.85021145823832]),
        {
          "class": 4,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3365434102638, 19.85142241762711]),
        {
          "class": 4,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36126264854505, 19.861957374366046]),
        {
          "class": 4,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3599751882179, 19.86284534641149]),
        {
          "class": 4,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3601897649391, 19.865953209418077]),
        {
          "class": 4,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36851534172132, 19.85909161249077]),
        {
          "class": 4,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3665841512306, 19.863168244104486]),
        {
          "class": 4,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3740943364723, 19.862966433123404]),
        {
          "class": 4,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38121828361585, 19.86312788192883]),
        {
          "class": 4,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38392195030286, 19.863571865296272]),
        {
          "class": 4,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38756975456312, 19.8632086062699]),
        {
          "class": 4,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38997301384046, 19.862683897318476]),
        {
          "class": 4,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38877138420179, 19.861876649388122]),
        {
          "class": 4,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38203367515638, 19.861109760048713]),
        {
          "class": 4,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3808320455177, 19.860907946448393]),
        {
          "class": 4,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37877210899427, 19.8573156214008]),
        {
          "class": 4,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3758967809303, 19.853279204076475]),
        {
          "class": 4,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37898668571546, 19.852027893856445]),
        {
          "class": 4,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37254938407972, 19.85489378332849]),
        {
          "class": 4,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3646762525313, 19.853965402265988]),
        {
          "class": 4,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37068440072466, 19.852835191902024]),
        {
          "class": 4,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31343533151079, 19.846457425416286]),
        {
          "class": 4,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31146122567583, 19.848919758039305]),
        {
          "class": 4,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3100879346602, 19.848193172057695]),
        {
          "class": 4,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31111790292192, 19.84653815823908]),
        {
          "class": 4,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30892922036577, 19.84573082816349]),
        {
          "class": 4,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30747009866167, 19.84185558665043]),
        {
          "class": 4,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30541016213823, 19.84233999701233]),
        {
          "class": 4,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30553890817094, 19.84351064928553]),
        {
          "class": 4,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30747009866167, 19.843429914923103]),
        {
          "class": 4,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30875755898882, 19.84439872456254]),
        {
          "class": 4,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31056000344682, 19.854086495756096]),
        {
          "class": 4,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30880047433305, 19.854086495756096]),
        {
          "class": 4,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30395104043413, 19.852229718752863]),
        {
          "class": 4,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30502392404009, 19.853319568758003]),
        {
          "class": 4,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30798508279253, 19.856589073860796]),
        {
          "class": 4,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30618263833452, 19.85707343925716]),
        {
          "class": 4,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.308070913481, 19.858122892542816]),
        {
          "class": 4,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3103025113814, 19.858809069783682]),
        {
          "class": 4,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3109891568892, 19.858768706498736]),
        {
          "class": 4,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3082854902022, 19.854570868792408]),
        {
          "class": 4,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30747009866167, 19.85323883938468]),
        {
          "class": 4,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30747009866167, 19.854207589153805]),
        {
          "class": 4,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31219078652788, 19.851664608396057]),
        {
          "class": 4,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31086041085649, 19.853037015771694]),
        {
          "class": 4,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36479797694639, 19.879151110927722]),
        {
          "class": 4,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37226524684385, 19.87874752939992]),
        {
          "class": 4,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36969032618956, 19.884397577244815]),
        {
          "class": 4,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36488380763487, 19.887303237673535]),
        {
          "class": 4,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36488380763487, 19.884881857684338]),
        {
          "class": 4,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3654846224542, 19.881491863518473]),
        {
          "class": 4,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36351051661924, 19.874873094437213]),
        {
          "class": 4,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35793152186827, 19.874308064758115]),
        {
          "class": 4,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35604324672178, 19.874308064758115]),
        {
          "class": 4,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35200920436338, 19.875438122102018]),
        {
          "class": 4,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34797516200499, 19.876083865538078]),
        {
          "class": 4,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3435119662042, 19.87616458328259]),
        {
          "class": 4,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34076538417295, 19.87576099414893]),
        {
          "class": 4,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33716049525694, 19.87576099414893]),
        {
          "class": 4,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33166733119444, 19.874873094437213]),
        {
          "class": 4,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32728996608213, 19.873420156907038]),
        {
          "class": 4,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32325592372374, 19.872209365458193]),
        {
          "class": 4,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36814537379698, 19.8739851897514]),
        {
          "class": 4,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.371750262713, 19.87285512204852]),
        {
          "class": 4,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.384539035296, 19.871563606237242]),
        {
          "class": 4,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38908806178526, 19.871563606237242]),
        {
          "class": 4,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39337959620909, 19.86938414944596]),
        {
          "class": 4,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.393722918963, 19.871805766253367]),
        {
          "class": 4,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39964523646788, 19.8680926053574]),
        {
          "class": 4,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40428009364561, 19.86833477067541]),
        {
          "class": 4,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40882912013487, 19.8654287624488]),
        {
          "class": 4,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42213287684874, 19.869662201909193]),
        {
          "class": 4,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42178955409483, 19.869662201909193]),
        {
          "class": 4,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42127456996397, 19.8684513817579]),
        {
          "class": 4,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41518059108213, 19.868047772985914]),
        {
          "class": 4,
          "system:index": "131"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41518059108213, 19.868532103389]),
        {
          "class": 4,
          "system:index": "132"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42033043239073, 19.866191159401986]),
        {
          "class": 4,
          "system:index": "133"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42067375514463, 19.866191159401986]),
        {
          "class": 4,
          "system:index": "134"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41904297206358, 19.871794806895608]),
        {
          "class": 4,
          "system:index": "135"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41878547999815, 19.8729248821577]),
        {
          "class": 4,
          "system:index": "136"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41672554347471, 19.867678036029783]),
        {
          "class": 4,
          "system:index": "137"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3874572787042, 19.8922156382134]),
        {
          "class": 4,
          "system:index": "138"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38883056971983, 19.894556197742258]),
        {
          "class": 4,
          "system:index": "139"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39037552211241, 19.896008941426185]),
        {
          "class": 4,
          "system:index": "140"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39183464381651, 19.89173138019815]),
        {
          "class": 4,
          "system:index": "141"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39217796657042, 19.89415265546433]),
        {
          "class": 4,
          "system:index": "142"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39303627345518, 19.89536327921239]),
        {
          "class": 4,
          "system:index": "143"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34531441066221, 19.893022731614405]),
        {
          "class": 4,
          "system:index": "144"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34222450587706, 19.887857262764665]),
        {
          "class": 4,
          "system:index": "145"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33673134181456, 19.884709472571043]),
        {
          "class": 4,
          "system:index": "146"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34703102443174, 19.883256625230064]),
        {
          "class": 4,
          "system:index": "147"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33424225184874, 19.88317591109823]),
        {
          "class": 4,
          "system:index": "148"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33098068568663, 19.885920168510033]),
        {
          "class": 4,
          "system:index": "149"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32634582850889, 19.880108743617786]),
        {
          "class": 4,
          "system:index": "150"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32540169093565, 19.878171554617317]),
        {
          "class": 4,
          "system:index": "151"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48127022120909, 19.873570635833126]),
        {
          "class": 4,
          "system:index": "152"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48247185084776, 19.874942853658254]),
        {
          "class": 4,
          "system:index": "153"
        }),
    ee.Feature(
        ee.Geometry.Point([75.483415988421, 19.87679936474698]),
        {
          "class": 4,
          "system:index": "154"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48873749110655, 19.87276344332779]),
        {
          "class": 4,
          "system:index": "155"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48727836940245, 19.872602004333473]),
        {
          "class": 4,
          "system:index": "156"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47998276088194, 19.870826164544592]),
        {
          "class": 4,
          "system:index": "157"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48127022120909, 19.872521284774656]),
        {
          "class": 4,
          "system:index": "158"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48350181910948, 19.872036966558564]),
        {
          "class": 4,
          "system:index": "159"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48127022120909, 19.87058400303204]),
        {
          "class": 4,
          "system:index": "160"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4793819460626, 19.8681623675623]),
        {
          "class": 4,
          "system:index": "161"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50272789332823, 19.87639577722984]),
        {
          "class": 4,
          "system:index": "162"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50161209437803, 19.874216386877748]),
        {
          "class": 4,
          "system:index": "163"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50118294093565, 19.88059303716742]),
        {
          "class": 4,
          "system:index": "164"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49749222133116, 19.88067375261511]),
        {
          "class": 4,
          "system:index": "165"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4929431948419, 19.880350890577635]),
        {
          "class": 4,
          "system:index": "166"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4918273958917, 19.880189459312177]),
        {
          "class": 4,
          "system:index": "167"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49225654933409, 19.88366019527241]),
        {
          "class": 4,
          "system:index": "168"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49277153346495, 19.886000881243636]),
        {
          "class": 4,
          "system:index": "169"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4929431948419, 19.887857262764665]),
        {
          "class": 4,
          "system:index": "170"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4900249514337, 19.88842224412633]),
        {
          "class": 4,
          "system:index": "171"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48925247523741, 19.883983050566073]),
        {
          "class": 4,
          "system:index": "172"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48950996730284, 19.873974230544313]),
        {
          "class": 4,
          "system:index": "173"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48950996730284, 19.869696074321325]),
        {
          "class": 4,
          "system:index": "174"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49011078212217, 19.880108743617786]),
        {
          "class": 4,
          "system:index": "175"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49062576625303, 19.876718647325784]),
        {
          "class": 4,
          "system:index": "176"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48496094081358, 19.868081645742958]),
        {
          "class": 4,
          "system:index": "177"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49071159694151, 19.868000923882516]),
        {
          "class": 4,
          "system:index": "178"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48659172389463, 19.86751659185685]),
        {
          "class": 4,
          "system:index": "179"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36393967006163, 19.917314316793853]),
        {
          "class": 4,
          "system:index": "180"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35758819911436, 19.918928243459064]),
        {
          "class": 4,
          "system:index": "181"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35733070704893, 19.913521524292342]),
        {
          "class": 4,
          "system:index": "182"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35767402980284, 19.90553215317152]),
        {
          "class": 4,
          "system:index": "183"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35055008265928, 19.908679529354856]),
        {
          "class": 4,
          "system:index": "184"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34883346888975, 19.915942466176805]),
        {
          "class": 4,
          "system:index": "185"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3431686434503, 19.918040585831754]),
        {
          "class": 4,
          "system:index": "186"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3417095217462, 19.920380763372787]),
        {
          "class": 4,
          "system:index": "187"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3457435641046, 19.92247882413356]),
        {
          "class": 4,
          "system:index": "188"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34694519374327, 19.917395013518348]),
        {
          "class": 4,
          "system:index": "189"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34239616725401, 19.912714535429004]),
        {
          "class": 4,
          "system:index": "190"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34368362758116, 19.912149640774846]),
        {
          "class": 4,
          "system:index": "191"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34445610377745, 19.916023163601356]),
        {
          "class": 4,
          "system:index": "192"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33758964869932, 19.918847547517046]),
        {
          "class": 4,
          "system:index": "193"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33870544764952, 19.91787919300049]),
        {
          "class": 4,
          "system:index": "194"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38394915212609, 19.910293544135463]),
        {
          "class": 4,
          "system:index": "195"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38583742727258, 19.913844318684777]),
        {
          "class": 4,
          "system:index": "196"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38351999868371, 19.913198729241095]),
        {
          "class": 4,
          "system:index": "197"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38506495107629, 19.91327942806566]),
        {
          "class": 4,
          "system:index": "198"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40283190359094, 19.941279433188992]),
        {
          "class": 4,
          "system:index": "199"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40746676076867, 19.93805201988997]),
        {
          "class": 4,
          "system:index": "200"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41141497243859, 19.93466316495014]),
        {
          "class": 4,
          "system:index": "201"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41742312063195, 19.930386649015876]),
        {
          "class": 4,
          "system:index": "202"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42214380849816, 19.926271401768147]),
        {
          "class": 4,
          "system:index": "203"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43270098318078, 19.91626525562796]),
        {
          "class": 4,
          "system:index": "204"
        }),
    ee.Feature(
        ee.Geometry.Point([75.43613421071984, 19.912472437967125]),
        {
          "class": 4,
          "system:index": "205"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4395674382589, 19.910697045257578]),
        {
          "class": 4,
          "system:index": "206"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44300066579797, 19.90779181420653]),
        {
          "class": 4,
          "system:index": "207"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4458330785177, 19.9064198809983]),
        {
          "class": 4,
          "system:index": "208"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44969545949914, 19.90593566643748]),
        {
          "class": 4,
          "system:index": "209"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4267786656759, 19.92094562862432]),
        {
          "class": 4,
          "system:index": "210"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42909609426476, 19.91908963521956]),
        {
          "class": 4,
          "system:index": "211"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42411791433312, 19.92393131142595]),
        {
          "class": 4,
          "system:index": "212"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28447143797973, 19.88226974791695]),
        {
          "class": 4,
          "system:index": "213"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28344146971801, 19.881139739290226]),
        {
          "class": 4,
          "system:index": "214"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28146736388305, 19.880978308828496]),
        {
          "class": 4,
          "system:index": "215"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27949325804809, 19.878718265094847]),
        {
          "class": 4,
          "system:index": "216"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28138153319458, 19.879363995165228]),
        {
          "class": 4,
          "system:index": "217"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28258316283325, 19.880413300917205]),
        {
          "class": 4,
          "system:index": "218"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28292648558715, 19.87742679706013]),
        {
          "class": 4,
          "system:index": "219"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28258316283325, 19.879202562894324]),
        {
          "class": 4,
          "system:index": "220"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28361313109497, 19.88089759353595]),
        {
          "class": 4,
          "system:index": "221"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28833381896118, 19.88210831860657]),
        {
          "class": 4,
          "system:index": "222"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28653137450317, 19.885014021026304]),
        {
          "class": 4,
          "system:index": "223"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28653137450317, 19.883803318161696]),
        {
          "class": 4,
          "system:index": "224"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28575889830688, 19.881704744611035]),
        {
          "class": 4,
          "system:index": "225"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29434196715454, 19.88412617316366]),
        {
          "class": 4,
          "system:index": "226"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29580108885864, 19.8858211511287]),
        {
          "class": 4,
          "system:index": "227"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2948569512854, 19.88412617316366]),
        {
          "class": 4,
          "system:index": "228"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29331199889282, 19.883561176478416]),
        {
          "class": 4,
          "system:index": "229"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29236786131958, 19.88210831860657]),
        {
          "class": 4,
          "system:index": "230"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29159538512329, 19.880009722604168]),
        {
          "class": 4,
          "system:index": "231"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29288284545044, 19.880978308828496]),
        {
          "class": 4,
          "system:index": "232"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29468528990844, 19.88412617316366]),
        {
          "class": 4,
          "system:index": "233"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34017555480102, 19.882754034861154]),
        {
          "class": 4,
          "system:index": "234"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34223549132446, 19.88291546351359]),
        {
          "class": 4,
          "system:index": "235"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34240715270141, 19.88186617433261]),
        {
          "class": 4,
          "system:index": "236"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34154884581665, 19.880816878202296]),
        {
          "class": 4,
          "system:index": "237"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34412376647094, 19.88291546351359]),
        {
          "class": 4,
          "system:index": "238"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34652702574829, 19.88896891922969]),
        {
          "class": 4,
          "system:index": "239"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3497885919104, 19.893407973042432]),
        {
          "class": 4,
          "system:index": "240"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34961693053344, 19.89042171417579]),
        {
          "class": 4,
          "system:index": "241"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36017410521606, 19.89405364323022]),
        {
          "class": 4,
          "system:index": "242"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35511009459594, 19.892439462823948]),
        {
          "class": 4,
          "system:index": "243"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35717003111938, 19.892520172235102]),
        {
          "class": 4,
          "system:index": "244"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3581999993811, 19.892520172235102]),
        {
          "class": 4,
          "system:index": "245"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35940162901977, 19.89235875337167]),
        {
          "class": 4,
          "system:index": "246"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36240570311645, 19.8934886819599]),
        {
          "class": 4,
          "system:index": "247"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36231987242797, 19.89235875337167]),
        {
          "class": 4,
          "system:index": "248"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36128990416626, 19.886063289357427]),
        {
          "class": 4,
          "system:index": "249"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3570842004309, 19.882834749207944]),
        {
          "class": 4,
          "system:index": "250"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35596840148071, 19.88138188467443]),
        {
          "class": 4,
          "system:index": "251"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35511009459594, 19.880009722604168]),
        {
          "class": 4,
          "system:index": "252"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35408012633422, 19.878314682464644]),
        {
          "class": 4,
          "system:index": "253"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32850258116821, 19.884368313983334]),
        {
          "class": 4,
          "system:index": "254"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33090584044555, 19.880978308828496]),
        {
          "class": 4,
          "system:index": "255"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32172195677856, 19.876458189127117]),
        {
          "class": 4,
          "system:index": "256"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3200911736975, 19.88049401645646]),
        {
          "class": 4,
          "system:index": "257"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31983368163208, 19.877346079958496]),
        {
          "class": 4,
          "system:index": "258"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31777374510864, 19.876296753896057]),
        {
          "class": 4,
          "system:index": "259"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32335273985962, 19.886951126362636]),
        {
          "class": 4,
          "system:index": "260"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32077781920532, 19.884771881193636]),
        {
          "class": 4,
          "system:index": "261"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31888954405883, 19.888161805167687]),
        {
          "class": 4,
          "system:index": "262"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32137863402465, 19.891067396540492]),
        {
          "class": 4,
          "system:index": "263"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32335273985962, 19.891067396540492]),
        {
          "class": 4,
          "system:index": "264"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32403938536743, 19.894860727262227]),
        {
          "class": 4,
          "system:index": "265"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32369606261352, 19.8972012476883]),
        {
          "class": 4,
          "system:index": "266"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29910557036499, 19.89542568363664]),
        {
          "class": 4,
          "system:index": "267"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29910557036499, 19.894093997529538]),
        {
          "class": 4,
          "system:index": "268"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29820434813598, 19.893851871579393]),
        {
          "class": 4,
          "system:index": "269"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29532902007202, 19.894578248319014]),
        {
          "class": 4,
          "system:index": "270"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29524318938354, 19.896757358542363]),
        {
          "class": 4,
          "system:index": "271"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2954148507605, 19.89736266161458]),
        {
          "class": 4,
          "system:index": "272"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2968739724646, 19.89833114171591]),
        {
          "class": 4,
          "system:index": "273"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29760353331665, 19.896757358542363]),
        {
          "class": 4,
          "system:index": "274"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29734604125122, 19.89542568363664]),
        {
          "class": 4,
          "system:index": "275"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29412739043335, 19.896030991800608]),
        {
          "class": 4,
          "system:index": "276"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29558651213745, 19.89639417558808]),
        {
          "class": 4,
          "system:index": "277"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2946423745642, 19.89574851494543]),
        {
          "class": 4,
          "system:index": "278"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29859058623413, 19.89288336407613]),
        {
          "class": 4,
          "system:index": "279"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29876224761108, 19.89449753995696]),
        {
          "class": 4,
          "system:index": "280"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29966346984008, 19.89586957651651]),
        {
          "class": 4,
          "system:index": "281"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29824726348022, 19.89829078849666]),
        {
          "class": 4,
          "system:index": "282"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29678814177612, 19.90151901352804]),
        {
          "class": 4,
          "system:index": "283"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29661648039917, 19.90075231604497]),
        {
          "class": 4,
          "system:index": "284"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29532902007202, 19.90055055293214]),
        {
          "class": 4,
          "system:index": "285"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31592838530639, 19.896595943998875]),
        {
          "class": 4,
          "system:index": "286"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31713001494506, 19.897160894181006]),
        {
          "class": 4,
          "system:index": "287"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31640045409301, 19.89534497570658]),
        {
          "class": 4,
          "system:index": "288"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31747333769897, 19.89647488298326]),
        {
          "class": 4,
          "system:index": "289"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31854622130493, 19.895022143574916]),
        {
          "class": 4,
          "system:index": "290"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3151559091101, 19.893569390836227]),
        {
          "class": 4,
          "system:index": "291"
        }),
    ee.Feature(
        ee.Geometry.Point([75.312795565177, 19.89611169938095]),
        {
          "class": 4,
          "system:index": "292"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31352512602905, 19.89792760906044]),
        {
          "class": 4,
          "system:index": "293"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3221081948767, 19.89703983359742]),
        {
          "class": 4,
          "system:index": "294"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32279484038452, 19.895143205701437]),
        {
          "class": 4,
          "system:index": "295"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32270900969604, 19.893044782404733]),
        {
          "class": 4,
          "system:index": "296"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32369606261352, 19.893448327506313]),
        {
          "class": 4,
          "system:index": "297"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32700054411987, 19.895385329676763]),
        {
          "class": 4,
          "system:index": "298"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27910701994995, 19.904343656415882]),
        {
          "class": 4,
          "system:index": "299"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27876369719604, 19.903213805310802]),
        {
          "class": 4,
          "system:index": "300"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27859203581909, 19.90317345333643]),
        {
          "class": 4,
          "system:index": "301"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2783774590979, 19.9041015461439]),
        {
          "class": 4,
          "system:index": "302"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27790539031128, 19.904787524285744]),
        {
          "class": 4,
          "system:index": "303"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27683250670532, 19.905554202219193]),
        {
          "class": 4,
          "system:index": "304"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27447216277221, 19.906159471647914]),
        {
          "class": 4,
          "system:index": "305"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27365677123169, 19.90567525629017]),
        {
          "class": 4,
          "system:index": "306"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27284137969116, 19.904706821129277]),
        {
          "class": 4,
          "system:index": "307"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27241222624878, 19.90365767634987]),
        {
          "class": 4,
          "system:index": "308"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27515880828003, 19.90289098922768]),
        {
          "class": 4,
          "system:index": "309"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27528755431274, 19.900833021218098]),
        {
          "class": 4,
          "system:index": "310"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27219764952758, 19.90115584149904]),
        {
          "class": 4,
          "system:index": "311"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27275554900268, 19.900671610830706]),
        {
          "class": 4,
          "system:index": "312"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27953617339233, 19.901720775406286]),
        {
          "class": 4,
          "system:index": "313"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28009407286743, 19.903213805310802]),
        {
          "class": 4,
          "system:index": "314"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28172485594848, 19.90583666157407]),
        {
          "class": 4,
          "system:index": "315"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28013698821167, 19.906603334424087]),
        {
          "class": 4,
          "system:index": "316"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28043739562133, 19.89582922266976]),
        {
          "class": 4,
          "system:index": "317"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28022281890014, 19.893690454073575]),
        {
          "class": 4,
          "system:index": "318"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27867786650756, 19.892076269964743]),
        {
          "class": 4,
          "system:index": "319"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28116695647338, 19.891470946681512]),
        {
          "class": 4,
          "system:index": "320"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28035156493286, 19.89308513696117]),
        {
          "class": 4,
          "system:index": "321"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28889171843628, 19.889372474718236]),
        {
          "class": 4,
          "system:index": "322"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29627315764526, 19.905392796647174]),
        {
          "class": 4,
          "system:index": "323"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29734604125122, 19.906805089819816]),
        {
          "class": 4,
          "system:index": "324"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29893390898803, 19.907450705357263]),
        {
          "class": 4,
          "system:index": "325"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29953472380737, 19.905755958952696]),
        {
          "class": 4,
          "system:index": "326"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29798977141479, 19.90329450922868]),
        {
          "class": 4,
          "system:index": "327"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29846184020141, 19.903859435501495]),
        {
          "class": 4,
          "system:index": "328"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30103676085571, 19.90361732448867]),
        {
          "class": 4,
          "system:index": "329"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29807560210327, 19.905029633508146]),
        {
          "class": 4,
          "system:index": "330"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29863350157837, 19.907208599839446]),
        {
          "class": 4,
          "system:index": "331"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29897682433227, 19.90547349945377]),
        {
          "class": 4,
          "system:index": "332"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29992096190551, 19.90365767634987]),
        {
          "class": 4,
          "system:index": "333"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2963160729895, 19.90426295303305]),
        {
          "class": 4,
          "system:index": "334"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29708854918579, 19.903375213105416]),
        {
          "class": 4,
          "system:index": "335"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29532902007202, 19.9033348611722]),
        {
          "class": 4,
          "system:index": "336"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29455654387573, 19.904706821129277]),
        {
          "class": 4,
          "system:index": "337"
        }),
    ee.Feature(
        ee.Geometry.Point([75.29554359679321, 19.90676473876125]),
        {
          "class": 4,
          "system:index": "338"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30039303069213, 19.9081770196878]),
        {
          "class": 4,
          "system:index": "339"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26769153838256, 19.89332726408383]),
        {
          "class": 4,
          "system:index": "340"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26803486113647, 19.894658956639926]),
        {
          "class": 4,
          "system:index": "341"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26953689818481, 19.893367618568284]),
        {
          "class": 4,
          "system:index": "342"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27039520506958, 19.89167272136636]),
        {
          "class": 4,
          "system:index": "343"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26927940611938, 19.892762300221666]),
        {
          "class": 4,
          "system:index": "344"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26854984526733, 19.893569390836227]),
        {
          "class": 4,
          "system:index": "345"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2686356759558, 19.892600881605087]),
        {
          "class": 4,
          "system:index": "346"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26730530028442, 19.89526426773539]),
        {
          "class": 4,
          "system:index": "347"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26674740080932, 19.896838065752384]),
        {
          "class": 4,
          "system:index": "348"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26528827910522, 19.896595943998875]),
        {
          "class": 4,
          "system:index": "349"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26434414153198, 19.895990637995013]),
        {
          "class": 4,
          "system:index": "350"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26567451720337, 19.89534497570658]),
        {
          "class": 4,
          "system:index": "351"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26631824736694, 19.89292371867371]),
        {
          "class": 4,
          "system:index": "352"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26700489287475, 19.89393258027057]),
        {
          "class": 4,
          "system:index": "353"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26618950133422, 19.894578248319014]),
        {
          "class": 4,
          "system:index": "354"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26812069182495, 19.891995560327334]),
        {
          "class": 4,
          "system:index": "355"
        })]),
imageVisParam2 = {"opacity":1,"bands":["classification"],"min":1.06,"max":3.94,"palette":["0223ff","14bf07","fefff5","ff2100"]},
imageVisParam3 = {"opacity":1,"bands":["B4","B3","B2"],"min":0.12761694371700286,"max":0.18695679128170015,"gamma":1},
imageVisParam4 = {"opacity":1,"bands":["B4","B3","B2"],"min":0.11067870736122132,"max":0.1782820475101471,"gamma":1},
imageVisParam5 = {"opacity":1,"bands":["B4","B3","B2"],"min":0.0869817754626274,"max":0.15832076758146285,"gamma":1},
imageVisParam6 = {"opacity":1,"bands":["B4","B3","B2"],"min":0.11023244336247444,"max":0.16371966078877448,"gamma":1},
imageVisParam7 = {"opacity":1,"bands":["classification"],"min":1.06,"max":3.94,"palette":["4100ff","059e04","fefff2","ff0200"]},
imageVisParam8 = {"opacity":1,"bands":["B4","B3","B2"],"min":0.10767442733049393,"max":0.19351916015148163,"gamma":1},
water2014 = 
/* color: #110dff */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.34224685071672, 19.89890478316112]),
        {
          "class": 5,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34147437452043, 19.898662664568718]),
        {
          "class": 5,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34095939038957, 19.898662664568718]),
        {
          "class": 5,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34070189832414, 19.897936306569484]),
        {
          "class": 5,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33466131047966, 19.92689467419878]),
        {
          "class": 5,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3338030035949, 19.92584567660426]),
        {
          "class": 5,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33200055913689, 19.92713674957802]),
        {
          "class": 5,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33448964910271, 19.924231820556525]),
        {
          "class": 5,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33680707769157, 19.926329830205336]),
        {
          "class": 5,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33680707769157, 19.931009905216257]),
        {
          "class": 5,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33534795598747, 19.931090594949247]),
        {
          "class": 5,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33697873906853, 19.929718863884577]),
        {
          "class": 5,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33629209356071, 19.929396101903517]),
        {
          "class": 5,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55149819877538, 19.910492934805614]),
        {
          "class": 5,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55149819877538, 19.90904032407499]),
        {
          "class": 5,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55527474906835, 19.912591126756134]),
        {
          "class": 5,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55321481254491, 19.911622733929693]),
        {
          "class": 5,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42719673065282, 20.035228956957162]),
        {
          "class": 5,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42994331268407, 20.033616220688614]),
        {
          "class": 5,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51602134077534, 19.808741042529803]),
        {
          "class": 5,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51327475874409, 19.811163584312496]),
        {
          "class": 5,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51190146772846, 19.811163584312496]),
        {
          "class": 5,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51001319258198, 19.811163584312496]),
        {
          "class": 5,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50898322432026, 19.809064050232603]),
        {
          "class": 5,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51773795454487, 19.807449005159626]),
        {
          "class": 5,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51464804975971, 19.808418034171098]),
        {
          "class": 5,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30398877499243, 19.833241723258077]),
        {
          "class": 5,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30767949459693, 19.83203062520498]),
        {
          "class": 5,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40338732291175, 19.789393852354756]),
        {
          "class": 5,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4046747832389, 19.789393852354756]),
        {
          "class": 5,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40115572501136, 19.78987842256603]),
        {
          "class": 5,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39720751334144, 19.789313090509513]),
        {
          "class": 5,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41171289969398, 19.785921056023735]),
        {
          "class": 5,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55386126982769, 20.01418925506475]),
        {
          "class": 5,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55446208464703, 20.014027960597687]),
        {
          "class": 5,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55265964018902, 20.016447360236732]),
        {
          "class": 5,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55283130156597, 20.015237665069083]),
        {
          "class": 5,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5303342633881, 19.859317842722678]),
        {
          "class": 5,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53026615725456, 19.859921968850458]),
        {
          "class": 5,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5306523953527, 19.859155070060513]),
        {
          "class": 5,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5302017842382, 19.860628319718902]),
        {
          "class": 5,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5298584614843, 19.86119339814893]),
        {
          "class": 5,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52966534243522, 19.861233760816912]),
        {
          "class": 5,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52966534243522, 19.8608503150565]),
        {
          "class": 5,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53052364931999, 19.860184328111632]),
        {
          "class": 5,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53142487154899, 19.859881605848685]),
        {
          "class": 5,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53129612551628, 19.859498156819587]),
        {
          "class": 5,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53101717577873, 19.85899361721124]),
        {
          "class": 5,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53129612551628, 19.859013798826396]),
        {
          "class": 5,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53142487154899, 19.859013798826396]),
        {
          "class": 5,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50874426261268, 19.81327897725134]),
        {
          "class": 5,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50634100333534, 19.814247970743992]),
        {
          "class": 5,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5046243895658, 19.81497471198864]),
        {
          "class": 5,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50565435782752, 19.81335972693458]),
        {
          "class": 5,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5068559874662, 19.81150247384696]),
        {
          "class": 5,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50840093985877, 19.80932219254827]),
        {
          "class": 5,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51106169120155, 19.808595425474028]),
        {
          "class": 5,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51303579703651, 19.80762639754318]),
        {
          "class": 5,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51406576529823, 19.811825475941948]),
        {
          "class": 5,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51603987113319, 19.812148477380937]),
        {
          "class": 5,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51895811454139, 19.81037196134874]),
        {
          "class": 5,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5163831938871, 19.811179471096008]),
        {
          "class": 5,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51715567008338, 19.81037196134874]),
        {
          "class": 5,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51226332084022, 19.814247970743992]),
        {
          "class": 5,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51114752189002, 19.81529770703127]),
        {
          "class": 5,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51020338431678, 19.815378455689398]),
        {
          "class": 5,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51372244254432, 19.81416722151178]),
        {
          "class": 5,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51629736319862, 19.806980375643235]),
        {
          "class": 5,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51518156424842, 19.806818869758327]),
        {
          "class": 5,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40763182393393, 19.719495189097277]),
        {
          "class": 5,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40748162022909, 19.721616101938963]),
        {
          "class": 5,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40750307790121, 19.72109092614254]),
        {
          "class": 5,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40801806203207, 19.720949532364063]),
        {
          "class": 5,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40741724721273, 19.72082833759724]),
        {
          "class": 5,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40866179219564, 19.720363756806467]),
        {
          "class": 5,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40709538213095, 19.720262760803692]),
        {
          "class": 5,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4066018556722, 19.719515388399934]),
        {
          "class": 5,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40623707524618, 19.71963658416223]),
        {
          "class": 5,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4068164323934, 19.72022236238472]),
        {
          "class": 5,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40685934773764, 19.721414111452233]),
        {
          "class": 5,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40685934773764, 19.72173729610845]),
        {
          "class": 5,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40776056996664, 19.72177769414453]),
        {
          "class": 5,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40818972340902, 19.721696898062167]),
        {
          "class": 5,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40866179219564, 19.721575703862033]),
        {
          "class": 5,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40891928426107, 19.72101012971301]),
        {
          "class": 5,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40840430013021, 19.720202163171404]),
        {
          "class": 5,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40934843770346, 19.71989917466538]),
        {
          "class": 5,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40896219960531, 19.71959618558501]),
        {
          "class": 5,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4086188768514, 19.71901040506785]),
        {
          "class": 5,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40851158849081, 19.718929607586674]),
        {
          "class": 5,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40806097737631, 19.718687214898114]),
        {
          "class": 5,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40801806203207, 19.718606417253604]),
        {
          "class": 5,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40784640065512, 19.71846502127741]),
        {
          "class": 5,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40758890858969, 19.71846502127741]),
        {
          "class": 5,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4071597551473, 19.71846502127741]),
        {
          "class": 5,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40696663609823, 19.718545818993395]),
        {
          "class": 5,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22395921381525, 19.962211539806127]),
        {
          "class": 5,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22370172174982, 19.96188884424328]),
        {
          "class": 5,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22344422968439, 19.96156614802032]),
        {
          "class": 5,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22361589106134, 19.960920753594028]),
        {
          "class": 5,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22490335138849, 19.96079974184514]),
        {
          "class": 5,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22601915033869, 19.961203113980424]),
        {
          "class": 5,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22631955774835, 19.96176783323704]),
        {
          "class": 5,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22679162653498, 19.96188884424328]),
        {
          "class": 5,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22687745722345, 19.96176783323704]),
        {
          "class": 5,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22657704981378, 19.961525810946032]),
        {
          "class": 5,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22490335138849, 19.9604770433943]),
        {
          "class": 5,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22601915033869, 19.960436706041524]),
        {
          "class": 5,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22511792810968, 19.960235019122976]),
        {
          "class": 5,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22451711329035, 19.960235019122976]),
        {
          "class": 5,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22353006037287, 19.960154344283367]),
        {
          "class": 5,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25783312262082, 19.95803617129268]),
        {
          "class": 5,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25816571653867, 19.95820760757921]),
        {
          "class": 5,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2583695644238, 19.958308452366623]),
        {
          "class": 5,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25849831045652, 19.958338705790272]),
        {
          "class": 5,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25888454855466, 19.958439550493907]),
        {
          "class": 5,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25893819273496, 19.95867149306762]),
        {
          "class": 5,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25928151548887, 19.958812675336848]),
        {
          "class": 5,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25928151548887, 19.958540395133078]),
        {
          "class": 5,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25893819273496, 19.958399212620193]),
        {
          "class": 5,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25878798903013, 19.958217692060852]),
        {
          "class": 5,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25859486998105, 19.95811684721543]),
        {
          "class": 5,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25834810675168, 19.95796557982643]),
        {
          "class": 5,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25812280119443, 19.957753805238205]),
        {
          "class": 5,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25777947844053, 19.957663044613373]),
        {
          "class": 5,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25771510542417, 19.957370593356]),
        {
          "class": 5,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25756490171933, 19.95745126961908]),
        {
          "class": 5,
          "system:index": "126"
        })]),
vegetation2014 = 
/* color: #12f66b */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.46305214389469, 19.900128239036107]),
        {
          "class": 6,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45571352696015, 19.901580941307472]),
        {
          "class": 6,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45571352696015, 19.90012824875975]),
        {
          "class": 6,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47133471226289, 19.880757741047994]),
        {
          "class": 6,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47133471226289, 19.87591474397894]),
        {
          "class": 6,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47116305088593, 19.87591474397894]),
        {
          "class": 6,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47013308262422, 19.8752689998538]),
        {
          "class": 6,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3587390470693, 19.955851936710566]),
        {
          "class": 6,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37899508954978, 19.93277661108962]),
        {
          "class": 6,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38242831708884, 19.94326581350835]),
        {
          "class": 6,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38019671918845, 19.943427180412176]),
        {
          "class": 6,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38507375028381, 19.919571203293973]),
        {
          "class": 6,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40807637479553, 19.92070093756367]),
        {
          "class": 6,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40773305204162, 19.918925637229822]),
        {
          "class": 6,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41425618436584, 19.913115424050353]),
        {
          "class": 6,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41374120023498, 19.913115424050353]),
        {
          "class": 6,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42816075589904, 19.90924183001237]),
        {
          "class": 6,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42953404691467, 19.90601376252518]),
        {
          "class": 6,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36806194986723, 19.928706974862]),
        {
          "class": 6,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36874859537504, 19.928061446107208]),
        {
          "class": 6,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36737530435941, 19.92660899676826]),
        {
          "class": 6,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36874859537504, 19.92725453145574]),
        {
          "class": 6,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3663453360977, 19.940648781125223]),
        {
          "class": 6,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36806194986723, 19.94016467140168]),
        {
          "class": 6,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3611954947891, 19.94452160548784]),
        {
          "class": 6,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36050884928129, 19.94452160548784]),
        {
          "class": 6,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34711926187894, 19.940487411382254]),
        {
          "class": 6,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34196942057035, 19.936291740193592]),
        {
          "class": 6,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34145443643949, 19.93693723532295]),
        {
          "class": 6,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32960980142973, 19.94210110139188]),
        {
          "class": 6,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32737820352934, 19.943069307482673]),
        {
          "class": 6,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34025280680082, 19.932741469835]),
        {
          "class": 6,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34111111368559, 19.9308049251038]),
        {
          "class": 6,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25873275576576, 19.826683459083835]),
        {
          "class": 6,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25838943301186, 19.82636048717487]),
        {
          "class": 6,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25804611025795, 19.82523008032447]),
        {
          "class": 6,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25735946475014, 19.823453710457613]),
        {
          "class": 6,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2552995282267, 19.825391567509662]),
        {
          "class": 6,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25426955996498, 19.826037514609514]),
        {
          "class": 6,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26147933779701, 19.837987062300915]),
        {
          "class": 6,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2607926922892, 19.837987062300915]),
        {
          "class": 6,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25976272402748, 19.837341163785]),
        {
          "class": 6,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25941940127358, 19.837341163785]),
        {
          "class": 6,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25941940127358, 19.836533786946205]),
        {
          "class": 6,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26285262881264, 19.83395015348246]),
        {
          "class": 6,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26096435366615, 19.83637231108594]),
        {
          "class": 6,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26542754946693, 19.832496841191865]),
        {
          "class": 6,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26680084048256, 19.830882034164567]),
        {
          "class": 6,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2659425335978, 19.83072055255911]),
        {
          "class": 6,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26388259707436, 19.831204996883102]),
        {
          "class": 6,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25838943301186, 19.83475754345422]),
        {
          "class": 6,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.26285262881264, 19.828298308782433]),
        {
          "class": 6,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27589889346108, 19.840409158339565]),
        {
          "class": 6,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27504058657631, 19.840247686419648]),
        {
          "class": 6,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27315231142983, 19.843800030727074]),
        {
          "class": 6,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28139205752358, 19.85155032422158]),
        {
          "class": 6,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27057739077553, 19.829590176725354]),
        {
          "class": 6,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25598617373451, 19.81457156335151]),
        {
          "class": 6,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25701614199623, 19.816348032470703]),
        {
          "class": 6,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25615783511147, 19.807303983037123]),
        {
          "class": 6,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.25735946475014, 19.808919029582455]),
        {
          "class": 6,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51144767864476, 19.79115005890298]),
        {
          "class": 6,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50921608074437, 19.7908270148392]),
        {
          "class": 6,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50921608074437, 19.791796145064254]),
        {
          "class": 6,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50097633465062, 19.792442228603772]),
        {
          "class": 6,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4977147684885, 19.794057425981972]),
        {
          "class": 6,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51522422893773, 19.794057425981972]),
        {
          "class": 6,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51573921306858, 19.797287771574844]),
        {
          "class": 6,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51762748821507, 19.800195026555876]),
        {
          "class": 6,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51762748821507, 19.800195026555876]),
        {
          "class": 6,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51762748821507, 19.800195026555876]),
        {
          "class": 6,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5193441019846, 19.8006795638895]),
        {
          "class": 6,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52123237713108, 19.801487122833777]),
        {
          "class": 6,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52243400676976, 19.801487122833777]),
        {
          "class": 6,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52157569988499, 19.788888736693313]),
        {
          "class": 6,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51951576336155, 19.789857878715477]),
        {
          "class": 6,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51951576336155, 19.78711196100057]),
        {
          "class": 6,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50526786907444, 19.78791958877294]),
        {
          "class": 6,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50749946697483, 19.78808111383593]),
        {
          "class": 6,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50818611248265, 19.78598127523855]),
        {
          "class": 6,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5054395304514, 19.786627382371208]),
        {
          "class": 6,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5057828532053, 19.786627382371208]),
        {
          "class": 6,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60603309734593, 19.764658269850614]),
        {
          "class": 6,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.61427284343968, 19.76271967336469]),
        {
          "class": 6,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.61804939373265, 19.75981173444881]),
        {
          "class": 6,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62182594402562, 19.76401207364062]),
        {
          "class": 6,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59847999675999, 19.762073469298905]),
        {
          "class": 6,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59264350994358, 19.762073469298905]),
        {
          "class": 6,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.65224403352958, 19.934008853336145]),
        {
          "class": 6,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62340492220146, 19.960449013622686]),
        {
          "class": 6,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62477821321708, 19.96238519477008]),
        {
          "class": 6,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62992805452568, 19.96432135215224]),
        {
          "class": 6,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.6367945096038, 19.968516278276514]),
        {
          "class": 6,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41769527925739, 20.135007001723793]),
        {
          "class": 6,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41014217867145, 20.141453674265712]),
        {
          "class": 6,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41563534273395, 20.133717635298595]),
        {
          "class": 6,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42112850679645, 20.129204769042843]),
        {
          "class": 6,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.46164059175739, 20.142742976853324]),
        {
          "class": 6,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.46301388277301, 20.141453674265712]),
        {
          "class": 6,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50009274019489, 19.79004714642827]),
        {
          "class": 6,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50009274019489, 19.78423221273782]),
        {
          "class": 6,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49700283540973, 19.789078005558014]),
        {
          "class": 6,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.58823390310224, 19.838664216056312]),
        {
          "class": 6,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.58411403005536, 19.837372421905595]),
        {
          "class": 6,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.58411403005536, 19.836565045225697]),
        {
          "class": 6,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.58720393484052, 19.83511175685935]),
        {
          "class": 6,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.58411403005536, 19.83285105963805]),
        {
          "class": 6,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59527201955731, 19.834950279553397]),
        {
          "class": 6,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59235377614911, 19.836080617247735]),
        {
          "class": 6,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59080882375653, 19.838179794481135]),
        {
          "class": 6,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60934825246747, 19.837372421905595]),
        {
          "class": 6,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.6052283794206, 19.838502742362103]),
        {
          "class": 6,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60231013601239, 19.833174018353727]),
        {
          "class": 6,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60402674978192, 19.830428848342763]),
        {
          "class": 6,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60059352224286, 19.829944401652185]),
        {
          "class": 6,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.56913950895405, 19.87286478306905]),
        {
          "class": 6,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.56742289518452, 19.870927505524307]),
        {
          "class": 6,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.56484797453022, 19.868182988477006]),
        {
          "class": 6,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.56999781583882, 19.868505875301423]),
        {
          "class": 6,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57222941373921, 19.870604623631795]),
        {
          "class": 6,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52283960375203, 19.918966289923464]),
        {
          "class": 6,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.526616154045, 19.918966289923464]),
        {
          "class": 6,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52936273607625, 19.916868182551298]),
        {
          "class": 6,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53382593187703, 19.91315607823763]),
        {
          "class": 6,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53674417528524, 19.906700037138105]),
        {
          "class": 6,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53313928636922, 19.903471917792263]),
        {
          "class": 6,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60197549852742, 19.88862172076308]),
        {
          "class": 6,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60420709642781, 19.88765318127186]),
        {
          "class": 6,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59905725511922, 19.885070380340174]),
        {
          "class": 6,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60111719164266, 19.880227515089434]),
        {
          "class": 6,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.60798364672078, 19.87893605935521]),
        {
          "class": 6,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.61038690599813, 19.87409300661363]),
        {
          "class": 6,
          "system:index": "131"
        }),
    ee.Feature(
        ee.Geometry.Point([75.61347681078328, 19.882810394979067]),
        {
          "class": 6,
          "system:index": "132"
        }),
    ee.Feature(
        ee.Geometry.Point([75.61553674730672, 19.89346432936924]),
        {
          "class": 6,
          "system:index": "133"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62205987963094, 19.8960469934025]),
        {
          "class": 6,
          "system:index": "134"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62892633470906, 19.895078499327163]),
        {
          "class": 6,
          "system:index": "135"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62858301195516, 19.888298874924114]),
        {
          "class": 6,
          "system:index": "136"
        }),
    ee.Feature(
        ee.Geometry.Point([75.62411981615438, 19.88474752726256]),
        {
          "class": 6,
          "system:index": "137"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52386957201375, 19.962536068688145]),
        {
          "class": 6,
          "system:index": "138"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39580331334469, 20.03558184950624]),
        {
          "class": 6,
          "system:index": "139"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40163980016109, 20.043161471185634]),
        {
          "class": 6,
          "system:index": "140"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40575967320797, 20.05017632700865]),
        {
          "class": 6,
          "system:index": "141"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4074762869775, 20.05017632700865]),
        {
          "class": 6,
          "system:index": "142"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40876374730465, 20.047999336325542]),
        {
          "class": 6,
          "system:index": "143"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4115103293359, 20.04654799243377]),
        {
          "class": 6,
          "system:index": "144"
        }),
    ee.Feature(
        ee.Geometry.Point([75.41348443517086, 20.04324210349261]),
        {
          "class": 6,
          "system:index": "145"
        })]),
bareland2014 = 
/* color: #dadad9 */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.47674679292926, 19.92163386435851]),
        {
          "class": 7,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4773476077486, 19.922037336546076]),
        {
          "class": 7,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47777676119098, 19.922360113554735]),
        {
          "class": 7,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47794842256793, 19.922602195878728]),
        {
          "class": 7,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47781967653522, 19.922037336546076]),
        {
          "class": 7,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47751926912555, 19.921714558878396]),
        {
          "class": 7,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47717594637164, 19.92119004376285]),
        {
          "class": 7,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48191467680714, 19.942106597093964]),
        {
          "class": 7,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4853479043462, 19.943720270557762]),
        {
          "class": 7,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.493415989063, 19.948399830343426]),
        {
          "class": 7,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49650589384815, 19.94952935847578]),
        {
          "class": 7,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50045410551807, 19.952756537173865]),
        {
          "class": 7,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50148407377979, 19.957113123741173]),
        {
          "class": 7,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49976746001026, 19.958081237755227]),
        {
          "class": 7,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50354401030323, 19.958081237755227]),
        {
          "class": 7,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5018273965337, 19.96146959002345]),
        {
          "class": 7,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51075378813526, 19.958081237755227]),
        {
          "class": 7,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50800720610401, 19.958081237755227]),
        {
          "class": 7,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50577560820362, 19.957919885832055]),
        {
          "class": 7,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50577560820362, 19.95501552300021]),
        {
          "class": 7,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5128137246587, 19.954370101777975]),
        {
          "class": 7,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5157319680669, 19.962114982204298]),
        {
          "class": 7,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50835052885792, 19.966632653530855]),
        {
          "class": 7,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51470199980518, 19.962114982204298]),
        {
          "class": 7,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50646225371143, 19.96501921434028]),
        {
          "class": 7,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57793422048505, 19.84738355170247]),
        {
          "class": 7,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5810241252702, 19.85093573633489]),
        {
          "class": 7,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5755309612077, 19.85997730206511]),
        {
          "class": 7,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57896418874677, 19.855618040054136]),
        {
          "class": 7,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57656092946942, 19.857394050147892]),
        {
          "class": 7,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.58823390310224, 19.85190450016391]),
        {
          "class": 7,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59613032644208, 19.853842010080044]),
        {
          "class": 7,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59613032644208, 19.851258658268307]),
        {
          "class": 7,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59613032644208, 19.849966966592227]),
        {
          "class": 7,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.59801860158856, 19.84835233721366]),
        {
          "class": 7,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57329936330731, 19.8218700727028]),
        {
          "class": 7,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57656092946942, 19.822839013836322]),
        {
          "class": 7,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57982249563153, 19.82380794906321]),
        {
          "class": 7,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.57432933156903, 19.830913293556215]),
        {
          "class": 7,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.56866450612958, 19.838987162952183]),
        {
          "class": 7,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5696944743913, 19.8464147602785]),
        {
          "class": 7,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.55012507741864, 19.861268912248285]),
        {
          "class": 7,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5535583049577, 19.857071140700523]),
        {
          "class": 7,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34796785192509, 19.809221225620966]),
        {
          "class": 7,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34659456090947, 19.806960160161747]),
        {
          "class": 7,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34710954504033, 19.806152628995008]),
        {
          "class": 7,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34848283605595, 19.805183586184295]),
        {
          "class": 7,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34710954504033, 19.804376046000023]),
        {
          "class": 7,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34470628576298, 19.802922463339826]),
        {
          "class": 7,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34247468786259, 19.802276422339578]),
        {
          "class": 7,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34041475133915, 19.798077091907807]),
        {
          "class": 7,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34127305822392, 19.793554612148444]),
        {
          "class": 7,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34298967199345, 19.792100930654318]),
        {
          "class": 7,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34659456090947, 19.786609125234154]),
        {
          "class": 7,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34899782018681, 19.797754061900452]),
        {
          "class": 7,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35019944982548, 19.79678496794483]),
        {
          "class": 7,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35655092077275, 19.79791557698608]),
        {
          "class": 7,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3596408255579, 19.79840012125955]),
        {
          "class": 7,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36341737585087, 19.80986723842047]),
        {
          "class": 7,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.35861085729618, 19.81196676189825]),
        {
          "class": 7,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3538043387415, 19.81196676189825]),
        {
          "class": 7,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31619176476974, 19.821800379321775]),
        {
          "class": 7,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31310185998458, 19.819377999585903]),
        {
          "class": 7,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.30932530969162, 19.816632591263886]),
        {
          "class": 7,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3108702620842, 19.814210132788624]),
        {
          "class": 7,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31447515100021, 19.811141632410564]),
        {
          "class": 7,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31842336267013, 19.81017261999136]),
        {
          "class": 7,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.56910696423505, 19.82023157346711]),
        {
          "class": 7,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50138193163289, 19.911057893781184]),
        {
          "class": 7,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5020685771407, 19.907991266435833]),
        {
          "class": 7,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50636011156453, 19.902987694210434]),
        {
          "class": 7,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4933138469161, 19.903471917792263]),
        {
          "class": 7,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49537378343953, 19.908959681493368]),
        {
          "class": 7,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49863534960164, 19.903633325323618]),
        {
          "class": 7,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50498682054891, 19.897822550485632]),
        {
          "class": 7,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51047998461141, 19.889428832481258]),
        {
          "class": 7,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.52146631273641, 19.887007484987283]),
        {
          "class": 7,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.46844927289116, 20.02609729726206]),
        {
          "class": 7,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47042337872612, 20.025774732590577]),
        {
          "class": 7,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47213999249566, 20.025694091319295]),
        {
          "class": 7,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47291246869194, 20.025694091319295]),
        {
          "class": 7,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.474543251773, 20.025774732590577]),
        {
          "class": 7,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44716326214898, 20.024403825352724]),
        {
          "class": 7,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44527498700249, 20.029322907570915]),
        {
          "class": 7,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45342890240777, 20.042385952265505]),
        {
          "class": 7,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45265642621148, 20.04488554687488]),
        {
          "class": 7,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44373003460991, 20.052571173151]),
        {
          "class": 7,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4470774314605, 20.052248662837666]),
        {
          "class": 7,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45205561139214, 20.05498997937924]),
        {
          "class": 7,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45703379132378, 20.057086247958033]),
        {
          "class": 7,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.46201197125542, 20.05837624547356]),
        {
          "class": 7,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45935121991265, 20.055151231802448]),
        {
          "class": 7,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4577204368316, 20.05498997937924]),
        {
          "class": 7,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45188395001519, 20.0521680351558]),
        {
          "class": 7,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4551455161773, 20.04958792747049]),
        {
          "class": 7,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45943705060112, 20.04853974661096]),
        {
          "class": 7,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47561597702192, 20.06986466923254]),
        {
          "class": 7,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47827672836469, 20.075185407160593]),
        {
          "class": 7,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48128080246137, 20.076878331363286]),
        {
          "class": 7,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.48325490829633, 20.079054921331792]),
        {
          "class": 7,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47930669662641, 20.08066719071152]),
        {
          "class": 7,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47098111984418, 20.075507870322916]),
        {
          "class": 7,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47329854843305, 20.07494355935358]),
        {
          "class": 7,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47226858017133, 20.07147703312517]),
        {
          "class": 7,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47029447433637, 20.0711545616729]),
        {
          "class": 7,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44980136865104, 20.094363723216848]),
        {
          "class": 7,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45100299828971, 20.097265512600618]),
        {
          "class": 7,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45572368615592, 20.099603026055032]),
        {
          "class": 7,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45701114648307, 20.100570262794168]),
        {
          "class": 7,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45203296655143, 20.104277948269235]),
        {
          "class": 7,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45134632104362, 20.104277948269235]),
        {
          "class": 7,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45048801415885, 20.103230133014993]),
        {
          "class": 7,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.44962970727408, 20.101456891222416]),
        {
          "class": 7,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4697140883776, 20.112740814340597]),
        {
          "class": 7,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4697140883776, 20.115158692009793]),
        {
          "class": 7,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45897040794985, 20.155784651821683]),
        {
          "class": 7,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45725379418032, 20.15876587427931]),
        {
          "class": 7,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45897040794985, 20.15804071730073]),
        {
          "class": 7,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.46008620690004, 20.156751541019904]),
        {
          "class": 7,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.45759711693422, 20.157073836088347]),
        {
          "class": 7,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40051417589049, 20.082265919733004]),
        {
          "class": 7,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39768176317077, 20.08274959237896]),
        {
          "class": 7,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39656596422057, 20.08008937435394]),
        {
          "class": 7,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39605098008971, 20.07799341319984]),
        {
          "class": 7,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39957003831725, 20.078396484829156]),
        {
          "class": 7,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.40137248277526, 20.081137344420718]),
        {
          "class": 7,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39759593248229, 20.074365721898136]),
        {
          "class": 7,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39467768907409, 20.072189066825466]),
        {
          "class": 7,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39579348802428, 20.070979800951097]),
        {
          "class": 7,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39802508592467, 20.07388202338222]),
        {
          "class": 7,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.39802508592467, 20.07275338770872]),
        {
          "class": 7,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.42033488246045, 20.03498269481845]),
        {
          "class": 7,
          "system:index": "131"
        })]),
builtup2014 = 
/* color: #ff0d0d */
/* shown: false */
ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([75.32640993357252, 19.884328565636203]),
        {
          "class": 8,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32864153147291, 19.8848128462867]),
        {
          "class": 8,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32932817698072, 19.884974272841195]),
        {
          "class": 8,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32932817698072, 19.88303714333037]),
        {
          "class": 8,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3279548859651, 19.88303714333037]),
        {
          "class": 8,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33276140451979, 19.884651419567696]),
        {
          "class": 8,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33241808176588, 19.888202769384037]),
        {
          "class": 8,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34855425119947, 19.88755707533998]),
        {
          "class": 8,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34726679087233, 19.886588529338308]),
        {
          "class": 8,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34529268503736, 19.886588529338308]),
        {
          "class": 8,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34082948923658, 19.886588529338308]),
        {
          "class": 8,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3407436585481, 19.885216412364485]),
        {
          "class": 8,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34263193369459, 19.8848128462867]),
        {
          "class": 8,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32804071665358, 19.87318970212168]),
        {
          "class": 8,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3652912354524, 19.88610425411652]),
        {
          "class": 8,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36520540476393, 19.885539264486457]),
        {
          "class": 8,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36520540476393, 19.884005711046704]),
        {
          "class": 8,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3652912354524, 19.88271428610899]),
        {
          "class": 8,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36546289682936, 19.881422850644093]),
        {
          "class": 8,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([75.38614809275221, 19.87222106829421]),
        {
          "class": 8,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33430635691236, 19.861632014634573]),
        {
          "class": 8,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33593713999342, 19.860744035796216]),
        {
          "class": 8,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33834039927076, 19.860421133167925]),
        {
          "class": 8,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34143030405592, 19.857757161403924]),
        {
          "class": 8,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34520685434889, 19.862600713152087]),
        {
          "class": 8,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33919870615553, 19.864053749834756]),
        {
          "class": 8,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34091531992506, 19.863407957397108]),
        {
          "class": 8,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34288942576002, 19.861147663157194]),
        {
          "class": 8,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34520685434889, 19.857353525415867]),
        {
          "class": 8,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([75.34520685434889, 19.85485095936902]),
        {
          "class": 8,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([75.33799707651686, 19.852752002571343]),
        {
          "class": 8,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3210026001985, 19.85904878966439]),
        {
          "class": 8,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31722604990553, 19.861954914797796]),
        {
          "class": 8,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31756937265943, 19.86373085394465]),
        {
          "class": 8,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32005846262525, 19.865345326820773]),
        {
          "class": 8,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3210026001985, 19.86389230197188]),
        {
          "class": 8,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32701074839186, 19.8630043357882]),
        {
          "class": 8,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32434999704908, 19.861793464798364]),
        {
          "class": 8,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32297670603346, 19.86122838850615]),
        {
          "class": 8,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3242641663606, 19.859856051986704]),
        {
          "class": 8,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32306253672193, 19.86001750395818]),
        {
          "class": 8,
          "system:index": "40"
        }),
    ee.Feature(
        ee.Geometry.Point([75.32529413462233, 19.8663140026569]),
        {
          "class": 8,
          "system:index": "41"
        }),
    ee.Feature(
        ee.Geometry.Point([75.3228050446565, 19.864860986683738]),
        {
          "class": 8,
          "system:index": "42"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31902849436354, 19.862358539077373]),
        {
          "class": 8,
          "system:index": "43"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31688272715162, 19.86066331020077]),
        {
          "class": 8,
          "system:index": "44"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31688272715162, 19.859694599850894]),
        {
          "class": 8,
          "system:index": "45"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36006420658794, 19.864457289544685]),
        {
          "class": 8,
          "system:index": "46"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36323994206157, 19.86502235433254]),
        {
          "class": 8,
          "system:index": "47"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36323994206157, 19.86889703006339]),
        {
          "class": 8,
          "system:index": "48"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36332577275004, 19.871722254756566]),
        {
          "class": 8,
          "system:index": "49"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36512821720805, 19.872125854174005]),
        {
          "class": 8,
          "system:index": "50"
        }),
    ee.Feature(
        ee.Geometry.Point([75.36675900028911, 19.866556091464172]),
        {
          "class": 8,
          "system:index": "51"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37062138127055, 19.871722254756566]),
        {
          "class": 8,
          "system:index": "52"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37250965641704, 19.871560814701876]),
        {
          "class": 8,
          "system:index": "53"
        }),
    ee.Feature(
        ee.Geometry.Point([75.37276714848247, 19.86889703006339]),
        {
          "class": 8,
          "system:index": "54"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49507837120402, 19.88154747341047]),
        {
          "class": 8,
          "system:index": "55"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49559335533488, 19.881628188371938]),
        {
          "class": 8,
          "system:index": "56"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49610833946574, 19.88130532827934]),
        {
          "class": 8,
          "system:index": "57"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49670915428507, 19.88130532827934]),
        {
          "class": 8,
          "system:index": "58"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49567918602335, 19.880396118890022]),
        {
          "class": 8,
          "system:index": "59"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49567918602335, 19.880396118890022]),
        {
          "class": 8,
          "system:index": "60"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49773912254679, 19.8808804115613]),
        {
          "class": 8,
          "system:index": "61"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49833993736613, 19.881445417806873]),
        {
          "class": 8,
          "system:index": "62"
        }),
    ee.Feature(
        ee.Geometry.Point([75.4973099691044, 19.880073256286824]),
        {
          "class": 8,
          "system:index": "63"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49567918602335, 19.880234687670647]),
        {
          "class": 8,
          "system:index": "64"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49430589500773, 19.879911824738517]),
        {
          "class": 8,
          "system:index": "65"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49361924949991, 19.87531095647787]),
        {
          "class": 8,
          "system:index": "66"
        }),
    ee.Feature(
        ee.Geometry.Point([75.51172952476847, 19.88201042203759]),
        {
          "class": 8,
          "system:index": "67"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50331811729777, 19.8824947097745]),
        {
          "class": 8,
          "system:index": "68"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50323228660929, 19.884108991539136]),
        {
          "class": 8,
          "system:index": "69"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50203065697062, 19.88475469963915]),
        {
          "class": 8,
          "system:index": "70"
        }),
    ee.Feature(
        ee.Geometry.Point([75.49945573631632, 19.88362470873693]),
        {
          "class": 8,
          "system:index": "71"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50288896385538, 19.876521724233704]),
        {
          "class": 8,
          "system:index": "72"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50297479454386, 19.874745928359722]),
        {
          "class": 8,
          "system:index": "73"
        }),
    ee.Feature(
        ee.Geometry.Point([75.50297479454386, 19.873131551208864]),
        {
          "class": 8,
          "system:index": "74"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47885637108195, 19.873292989663863]),
        {
          "class": 8,
          "system:index": "75"
        }),
    ee.Feature(
        ee.Geometry.Point([75.47894220177042, 19.872324356467576]),
        {
          "class": 8,
          "system:index": "76"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53870192952009, 19.867062529094643]),
        {
          "class": 8,
          "system:index": "77"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53947440571638, 19.867183612586516]),
        {
          "class": 8,
          "system:index": "78"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5400537628636, 19.867345057098486]),
        {
          "class": 8,
          "system:index": "79"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54112664646955, 19.8674661403746]),
        {
          "class": 8,
          "system:index": "80"
        }),
    ee.Feature(
        ee.Geometry.Point([75.54162017292829, 19.8675468625073]),
        {
          "class": 8,
          "system:index": "81"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53612700886579, 19.8667800005874]),
        {
          "class": 8,
          "system:index": "82"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53529015965314, 19.866658916787333]),
        {
          "class": 8,
          "system:index": "83"
        }),
    ee.Feature(
        ee.Geometry.Point([75.5328869003758, 19.866416748909828]),
        {
          "class": 8,
          "system:index": "84"
        }),
    ee.Feature(
        ee.Geometry.Point([75.53275815434309, 19.866396568236674]),
        {
          "class": 8,
          "system:index": "85"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21953737948728, 19.939083033152354]),
        {
          "class": 8,
          "system:index": "86"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21919405673337, 19.938679604486275]),
        {
          "class": 8,
          "system:index": "87"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22039568637204, 19.938235831763418]),
        {
          "class": 8,
          "system:index": "88"
        }),
    ee.Feature(
        ee.Geometry.Point([75.20803606723142, 19.92887597118494]),
        {
          "class": 8,
          "system:index": "89"
        }),
    ee.Feature(
        ee.Geometry.Point([75.20795023654294, 19.92839182538378]),
        {
          "class": 8,
          "system:index": "90"
        }),
    ee.Feature(
        ee.Geometry.Point([75.20795023654294, 19.92762525816526]),
        {
          "class": 8,
          "system:index": "91"
        }),
    ee.Feature(
        ee.Geometry.Point([75.20932352755857, 19.92738318353428]),
        {
          "class": 8,
          "system:index": "92"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2209106705029, 19.936137980195376]),
        {
          "class": 8,
          "system:index": "93"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2220264694531, 19.9361783237575]),
        {
          "class": 8,
          "system:index": "94"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22198355410886, 19.9346452611533]),
        {
          "class": 8,
          "system:index": "95"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22322809909177, 19.934524229261438]),
        {
          "class": 8,
          "system:index": "96"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22361433718991, 19.933919068411246]),
        {
          "class": 8,
          "system:index": "97"
        }),
    ee.Feature(
        ee.Geometry.Point([75.22666132663083, 19.93666244569941]),
        {
          "class": 8,
          "system:index": "98"
        }),
    ee.Feature(
        ee.Geometry.Point([75.21816408847165, 19.93561351295005]),
        {
          "class": 8,
          "system:index": "99"
        }),
    ee.Feature(
        ee.Geometry.Point([75.31456314440986, 19.872875357179375]),
        {
          "class": 8,
          "system:index": "100"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24589911698313, 19.839797046389332]),
        {
          "class": 8,
          "system:index": "101"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24534121750803, 19.839534653424643]),
        {
          "class": 8,
          "system:index": "102"
        }),
    ee.Feature(
        ee.Geometry.Point([75.244976437082, 19.839413548833164]),
        {
          "class": 8,
          "system:index": "103"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24478331803293, 19.83913097109391]),
        {
          "class": 8,
          "system:index": "104"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2450837254426, 19.838949313710287]),
        {
          "class": 8,
          "system:index": "105"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24514809845896, 19.838525445673756]),
        {
          "class": 8,
          "system:index": "106"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24478331803293, 19.838081392231594]),
        {
          "class": 8,
          "system:index": "107"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24409667252512, 19.837879549347438]),
        {
          "class": 8,
          "system:index": "108"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24403229950876, 19.83775844349381]),
        {
          "class": 8,
          "system:index": "109"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24448291062326, 19.83743549409932]),
        {
          "class": 8,
          "system:index": "110"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24482623337717, 19.837233650394285]),
        {
          "class": 8,
          "system:index": "111"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24574891327829, 19.83743549409932]),
        {
          "class": 8,
          "system:index": "112"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24649993180246, 19.83781899643217]),
        {
          "class": 8,
          "system:index": "113"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24729386567087, 19.839151155234823]),
        {
          "class": 8,
          "system:index": "114"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2478946804902, 19.83933281238755]),
        {
          "class": 8,
          "system:index": "115"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2480019688508, 19.83890894537461]),
        {
          "class": 8,
          "system:index": "116"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24804488419504, 19.838606182529855]),
        {
          "class": 8,
          "system:index": "117"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24763718842478, 19.838081392231594]),
        {
          "class": 8,
          "system:index": "118"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24600640534372, 19.83695106877628]),
        {
          "class": 8,
          "system:index": "119"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24568454026193, 19.83668867110936]),
        {
          "class": 8,
          "system:index": "120"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24529830216379, 19.83634553504468]),
        {
          "class": 8,
          "system:index": "121"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24454728363962, 19.83620424350846]),
        {
          "class": 8,
          "system:index": "122"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24388209580393, 19.8364464574936]),
        {
          "class": 8,
          "system:index": "123"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24377480744333, 19.836749224455595]),
        {
          "class": 8,
          "system:index": "124"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2441825032136, 19.837092359648132]),
        {
          "class": 8,
          "system:index": "125"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2450837254426, 19.83711254404812]),
        {
          "class": 8,
          "system:index": "126"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24637118576975, 19.83711254404812]),
        {
          "class": 8,
          "system:index": "127"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24746552704782, 19.83735475664809]),
        {
          "class": 8,
          "system:index": "128"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24830237626047, 19.837253834776337]),
        {
          "class": 8,
          "system:index": "129"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24817363022775, 19.83662811774005]),
        {
          "class": 8,
          "system:index": "130"
        }),
    ee.Feature(
        ee.Geometry.Point([75.24804488419504, 19.835699629853046]),
        {
          "class": 8,
          "system:index": "131"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2448691487214, 19.834771136538436]),
        {
          "class": 8,
          "system:index": "132"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27315175298111, 19.852932089124806]),
        {
          "class": 8,
          "system:index": "133"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27383839848892, 19.853618288815376]),
        {
          "class": 8,
          "system:index": "134"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27452504399673, 19.854465943159784]),
        {
          "class": 8,
          "system:index": "135"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27512585881607, 19.85519250042226]),
        {
          "class": 8,
          "system:index": "136"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27598416570083, 19.856363057902602]),
        {
          "class": 8,
          "system:index": "137"
        }),
    ee.Feature(
        ee.Geometry.Point([75.2768424725856, 19.857533606746646]),
        {
          "class": 8,
          "system:index": "138"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27812993291275, 19.859067416296632]),
        {
          "class": 8,
          "system:index": "139"
        }),
    ee.Feature(
        ee.Geometry.Point([75.27933156255142, 19.86064157383503]),
        {
          "class": 8,
          "system:index": "140"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28801504123064, 19.868784871670588]),
        {
          "class": 8,
          "system:index": "141"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28824034678789, 19.86894631455213]),
        {
          "class": 8,
          "system:index": "142"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28841200816484, 19.869016945761103]),
        {
          "class": 8,
          "system:index": "143"
        }),
    ee.Feature(
        ee.Geometry.Point([75.28869095790239, 19.86931965058604]),
        {
          "class": 8,
          "system:index": "144"
        })]);
 
 
 
 
 
 //Load Landsat 8 imagery.
 var image2023 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
 .filterBounds(roi)
 .filterDate('2022-01-01', '2022-06-30')
 .sort('CLOUD_COVER')
   .median()
 .clip(roi);
 
   // Load Landsat 8 imagery.
 var image2016 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
 .filterBounds(roi)
 .filterDate('2016-01-01', '2016-06-30')
 .sort('CLOUD_COVER')
   .median()
 .clip(roi);
 
   // Load Landsat 8 imagery.
 var image2015 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
 .filterBounds(roi)
 .filterDate('2015-01-01', '2015-06-30')
 .sort('CLOUD_COVER')
   .median()
 .clip(roi);
 
 // Load Landsat 8 imagery.
 var image2014 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
 .filterBounds(roi)
 .filterDate('2014-01-01', '2014-06-30')
 .sort('CLOUD_COVER')
   .median()
 .clip(roi);
 
// Load Landsat 8 imagery.
 var image2013 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
 .filterBounds(roi)
 .filterDate('2013-01-01', '2013-06-30')
 .sort('CLOUD_COVER')
   .median()
 .clip(roi);
 
Map.centerObject(roi);
Map.addLayer(image2023,imageVisParam,'Image 2023');

Map.centerObject(roi);
Map.addLayer(image2016,imageVisParam6,'Image 2016');

Map.centerObject(roi);
Map.addLayer(image2015,imageVisParam6,'Image 2015');

Map.centerObject(roi);
Map.addLayer(image2014,imageVisParam5,'Image 2014');

Map.centerObject(roi);
Map.addLayer(image2013,imageVisParam3,'Image 2013');

var bands = ['B4','B3','B2'];

var trainingData = water.merge(vegetation).merge(bareland).merge(buildup).merge(water2014).merge(vegetation2014).merge(bareland2014).merge(builtup2014)
print(trainingData)

// Prepare the training data by selecting relevant bands
var trainingDataBands = image2023.select(bands).sampleRegions({
 collection: trainingData,
 properties: ['class'], // assuming the land cover class labels are stored in 'class' property
 scale: 30
});
print(trainingDataBands);

// Split the training data into training and validation sets (e.g., 80:20 ratio)
var trainData = trainingDataBands.randomColumn()

var trainSet = trainData.filter(ee.Filter.lessThan('random',0.8))
var testSet = trainData.filter(ee.Filter.greaterThanOrEquals('random',0.8))
print (trainSet)
print(testSet)

// Train the Random Forest classifier
var classifier = ee.Classifier.smileRandomForest(70).train({
 features: trainSet,
 classProperty: 'class',
 inputProperties: bands
})

var classified2023 = image2023.classify(classifier);
Map.addLayer(classified2023,imageVisParam2,'Classified 2023');

var classified2016 = image2016.classify(classifier);
Map.addLayer(classified2016,imageVisParam7,'Classified 2016');

var classified2015 = image2015.classify(classifier);
Map.addLayer(classified2015,imageVisParam7,'Classified 2015');

var classified2014 = image2014.classify(classifier);
Map.addLayer(classified2014,imageVisParam2,'Classified 2014');

var classified2013 = image2013.classify(classifier);
Map.addLayer(classified2013,imageVisParam2,'Classified 2013');

//Get a confusion matrix representing resubstitution accuracy.
var trainAccuracy = classifier.confusionMatrix();
print('Resubstitution error matrix: ', trainAccuracy);
print('Training overall accuracy: ', trainAccuracy.accuracy());

// Classify the validation data.
var validated = testSet.classify(classifier);

// Get a confusion matrix representing expected accuracy.
var testAccuracy = validated.errorMatrix('class', 'classification');
print('Validation error matrix: ', testAccuracy);
print('Validation overall accuracy: ', testAccuracy.accuracy());

var precision = ee.Number(testAccuracy.accuracy()).multiply(100);
print('Precison', precision);

var classifiedImage2023 = classified2023.clip(roi)

// Get the class values from the classified image
var classValues = classifiedImage2023.reduceRegion({
 reducer: ee.Reducer.frequencyHistogram(),
 geometry:roi, // Replace with your region of interest
 scale: 30,
 tileScale: 10 // Replace with appropriate scale
}).get('classification');

// Create a dictionary of class values and their frequencies
var classHistogram = ee.Dictionary(classValues);

// Create a feature collection from the class histogram
var classFeatureCollection = ee.FeatureCollection(
 classHistogram.keys().map(function(key){
   return ee.Feature(null, {
   '2023' : classHistogram.getNumber(key)
   });
 })
);
// Create a bar chart using the feature collection
var chart = ui.Chart.feature.byProperty(classFeatureCollection)
 .setChartType('ColumnChart')
 .setOptions({
   title: 'Class Distribution',
   vAxis: { title: 'Count' },
   hAxis: { title: 'Class' },
   colors: ['blue','green','gray','red'],
   legend: { position: 'none' }
 });

// Display the chart
print(chart);

var classifiedImage2016 = classified2016.clip(roi)
// Get the class values from the classified image
var classValues4 = classifiedImage2016.reduceRegion({
 reducer: ee.Reducer.frequencyHistogram(),
 geometry:roi, // Replace with your region of interest
 scale: 30,
 tileScale: 10 // Replace with appropriate scale
}).get('classification');
// Create a dictionary of class values and their frequencies
var classHistogram4 = ee.Dictionary(classValues4);

// Create a feature collection from the class histogram
var classFeatureCollection4 = ee.FeatureCollection(
 classHistogram4.keys().map(function(key){
   return ee.Feature(null, {
   '2016' : classHistogram4.getNumber(key)
   });
 })
);
// Create a bar chart using the feature collection
var chart4 = ui.Chart.feature.byProperty(classFeatureCollection4)
 .setChartType('ColumnChart')
 .setOptions({
   title: 'Class Distribution',
   vAxis: { title: 'Count' },
   hAxis: { title: 'Class' },
   colors: ['blue','green','gray','red'],
   legend: { position: 'none' }
 });
// Display the chart
print(chart4);

var classifiedImage2015 = classified2015.clip(roi)
// Get the class values from the classified image
var classValues3 = classifiedImage2015.reduceRegion({
 reducer: ee.Reducer.frequencyHistogram(),
 geometry:roi, // Replace with your region of interest
 scale: 30,
 tileScale: 10 // Replace with appropriate scale
}).get('classification');
// Create a dictionary of class values and their frequencies
var classHistogram3 = ee.Dictionary(classValues3);

// Create a feature collection from the class histogram
var classFeatureCollection3 = ee.FeatureCollection(
 classHistogram3.keys().map(function(key){
   return ee.Feature(null, {
   '2015' : classHistogram3.getNumber(key)
   });
 })
);
// Create a bar chart using the feature collection
var chart3 = ui.Chart.feature.byProperty(classFeatureCollection3)
 .setChartType('ColumnChart')
 .setOptions({
   title: 'Class Distribution',
   vAxis: { title: 'Count' },
   hAxis: { title: 'Class' },
   colors: ['blue','green','gray','red'],
   legend: { position: 'none' }
 });
// Display the chart
print(chart3);

var classifiedImage2014 = classified2014.clip(roi)
// Get the class values from the classified image
var classValues2 = classifiedImage2014.reduceRegion({
 reducer: ee.Reducer.frequencyHistogram(),
 geometry:roi, // Replace with your region of interest
 scale: 30,
 tileScale: 10 // Replace with appropriate scale
}).get('classification');
// Create a dictionary of class values and their frequencies
var classHistogram2 = ee.Dictionary(classValues2);

// Create a feature collection from the class histogram
var classFeatureCollection2 = ee.FeatureCollection(
 classHistogram2.keys().map(function(key){
   return ee.Feature(null, {
   '2014' : classHistogram2.getNumber(key)
   });
 })
);
// Create a bar chart using the feature collection
var chart2 = ui.Chart.feature.byProperty(classFeatureCollection2)
 .setChartType('ColumnChart')
 .setOptions({
   title: 'Class Distribution',
   vAxis: { title: 'Count' },
   hAxis: { title: 'Class' },
   colors: ['blue','green','gray','red'],
   legend: { position: 'none' }
 });
// Display the chart
print(chart2);

var classifiedImage2013 = classified2013.clip(roi)

// Get the class values from the classified image
var classValues1 = classifiedImage2013.reduceRegion({
 reducer: ee.Reducer.frequencyHistogram(),
 geometry:roi, // Replace with your region of interest
 scale: 30,
 tileScale: 10 // Replace with appropriate scale
}).get('classification');
// Create a dictionary of class values and their frequencies
var classHistogram1 = ee.Dictionary(classValues1);

// Create a feature collection from the class histogram
var classFeatureCollection1 = ee.FeatureCollection(
 classHistogram1.keys().map(function(key){
   return ee.Feature(null, {
   '2013' : classHistogram1.getNumber(key)
   });
 })
);
// Create a bar chart using the feature collection
var chart1 = ui.Chart.feature.byProperty(classFeatureCollection1)
 .setChartType('ColumnChart')
 .setOptions({
   title: 'Class Distribution',
   vAxis: { title: 'Count' },
   hAxis: { title: 'Class' },
   colors: ['blue','green','gray','red'],
   legend: { position: 'none' }
 });

// Display the chart
print(chart1);

