# 🏝️ Guarma <Badge type="danger" text="NOT FOR SALE" />
Documentation relating to the spooni_guarma.

<Badge type="warning" text="This project was acquired on a commission basis exclusively for one year until 1st October 2025 from Spooni Development and is not for sale during this period. It is for information purposes only." />

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
== BUY
[Buy the mapping](https://spooni-mapping.tebex.io/package/)
:::

## 1. Installation
spooni_guarma works Standalone.  

To install spooni_guarma:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_guarma`
- Add this ensure in your server.cfg
  ```
    ensure spooni_guarma
  ```
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. For developers
| Apartments Left           | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Bath Door                 | `[4132741350] = {4132741350, -1005172683, "p_door01x", 1315.2237548828125, -6860.25244140625, 44.18766403198242}`
| Florist Door              | `[785289693] = {785289693, 1081626861, "p_door_wglass01x", 1312.2921142578125, -6865.29638671875, 44.20800399780273}` <br> `[1571090313] = {1571090313, 1081626861, "p_door_wglass01x", 1310.96484375, -6867.59130859375, 44.20679092407226}`
| Room Door                 | `[1083716976] = {1083716976, -1005172683, "p_door01x", 1314.604248046875, -6861.28125, 47.53164672851562}`
| Kitchen Door              | `[1263684324] = {1263684324, -1005172683, "p_door_wglass01x", 1312.414794921875, -6865.203125, 47.53053283691406}` <br> `[3882287883] = {3882287883, -1005172683, "p_door01x", 1310.9766845703125, -6867.60986328125, 47.53047943115234}`

| Apartments Right          | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Sheriff Office Door       | `[1903522740] = {1903522740, 1081626861, "p_door_wglass01x", 1302.310791015625, -6889.75, 43.90552139282226}`
| Room Door                 | `[3780989830] = {3780989830, -1005172683, "p_door01x", 1302.1805419921875, -6889.8134765625, 47.22282028198242}`
| Apartment Door            | `[1664079657] = {1664079657, -1005172683, "p_door01x", 1299.6549072265625, -6893.4990234375, 47.22176742553711}` <br> `[3543381811] = {3543381811, -1005172683, "p_door01x", 1297.4029541015625, -6896.6943359375, 47.22884750366211}`

| Artist                    | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[3125052114] = {3125052114, -1005172683, "p_door01x", 1305.2490234375, -6838.9560546875, 43.0362434387207}` <br> `[575328993] = {575328993, -1005172683, "p_door01x", 1309.100830078125, -6841.16845703125, 43.0318603515625}`

| Chapel                    | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[2788251678] = {2788251678, 729932809, "p_door_ann_saloon01x", 1300.0579833984375, -6941.1884765625, 54.20838928222656}`

| Courthouse                | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[2834045990] = {2834045990, 1987553981, "p_door_cinco_l_01x", 1317.4210205078125, -6885.00244140625, 47.9620475769043}` <br> `[3202632988] = {3202632988, -1446065143, "p_door_cinco_r_01x", 1316.4625244140625, -6886.34423828125, 47.96176147460937}`
| Back Door                 | `[2170802712] = {2170802712, 1987553981, "p_door_cinco_l_01x", 1323.3968505859375, -6891.189453125, 47.94156646728515}` <br> `[805710436] = {805710436, -1446065143, "p_door_cinco_r_01x", 1324.3406982421875, -6889.83642578125, 47.94144821166992}`
| Side Left Door            | `[1708727043] = {1708727043, 1987553981, "p_door_cinco_l_01x", 1328.5618896484375, -6882.220703125, 47.97367095947265}` <br> `[3014537642] = {3014537642, -1446065143, "p_door_cinco_r_01x", 1327.2008056640625, -6881.2880859375, 47.97332000732422}`
| Side Right Door           | `[3629251313] = {3629251313, 1987553981, "p_door_cinco_l_01x", 1316.3521728515625, -6896.7890625, 47.93923568725586}` <br> `[3802501016] = {3802501016, -1446065143, "p_door_cinco_r_01x", 1317.694091796875, -6897.744140625, 47.93888473510742}`
| Balcony Door              | `[54153409] = {54153409, 1987553981, "p_door_cinco_l_01x", 1317.412353515625, -6884.97607421875, 51.80492782592773}` <br> `[1430747616] = {1430747616, -1446065143, "p_door_cinco_r_01x", 1316.480712890625, -6886.33544921875, 51.8045768737793}`
| Storageroom Door          | `[982402158] = {982402158, -1866470762, "p_doorrhosheriff02x", 1318.249267578125, -6890.9111328125, 47.99215698242187}`
| Staircase Door            | `[3968574308] = {3968574308, 1987553981, "p_door_cinco_l_01x", 1314.99755859375, -6891.85302734375, 47.9565315246582}` <br> `[1889480847] = {1889480847, -1446065143, "p_door_cinco_r_01x", 1313.658935546875, -6890.87939453125, 47.95700073242187}`
| Cell Door                 | `[2904205705] = {2904205705, -1949845795, "p_doorjailsgl_a", 1321.9293212890625, -6883.51611328125, 48.02325439453125}` <br> `[352842844] = {352842844, -1949845795, "p_doorjailsgl_a", 1321.442626953125, -6880.26611328125, 48.02804946899414}`
| Waitingroom Door          | `[2485286805] = {2485286805, -1866470762, "p_doorrhosheriff02x", 1327.0579833984375, -6885.123046875, 51.71235275268555}`
| Office Door               | `[1834755331] = {1834755331, -1866470762, "p_doorrhosheriff02x", 1325.7958984375, -6881.59912109375, 51.71670150756836}`

| Department                | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Office Door Left          | `[3420850193] = {3420850193, 31863704, "p_door10x", 1275.5743408203125, -6895.314453125, 43.86532974243164}`
| Office Door Right         | `[3721636844] = {3721636844, 944234058, "p_door09x", 1272.9835205078125, -6893.13916015625, 43.86532974243164}`
| Waitingroom Door          | `[1697594017] = {1697594017, 31863704, "p_door10x", 1274.9588623046875, -6888.26318359375, 47.90932083129883}`
| Office Door               | `[2063099443] = {2063099443, -113235247, "p_door15x", 1275.5291748046875, -6895.2685546875, 47.90932083129883}`

| Destillery                | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[606433801] = {606433801, -1005172683, "p_door01x", 1312.4052734375, -6901.357421875, 48.30575942993164}` <br> `[443244181] = {443244181, -1005172683, "p_door01x", 1306.2332763671875, -6897.0693359375, 48.30562210083008}`

| Doctor                    | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[4159421270] = {4159421270, 1946920872, "p_door51x", 1330.3804931640625, -6834.328125, 44.62771606445312}`
| Garage Door               | `[3792506777] = {3792506777, 1946920872, "p_door51x", 1334.0369873046875, -6838.02880859375, 44.65569686889648}`

| General Store             | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[725143821] = {725143821, 1081626861, "p_door_wglass01x", 1287.17333984375, -6906.73046875, 43.94535446166992}` <br> `[3718624744] = {3718624744, 1081626861, "p_door_wglass01x", 1284.3013916015625, -6910.12353515625, 43.94363784790039}`

| Goverment                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[326445494] = {326445494, -113235247, "p_door15x", 1299.1329345703125, -6856.921875, 42.57239532470703}`
| Side Door                 | `[827989248] = {827989248, -113235247, "p_door15x", 1300.2935791015625, -6862.888671875, 42.57090759277344}`
| Cantina Door              | `[3652105770] = {3652105770, -29643421, "p_door11x", 1297.958251953125, -6859.65966796875, 47.29288101196289}`
| Office Door               | `[3501499442] = {3501499442, 447074149, "p_door34x", 1303.9285888671875, -6850.77392578125, 47.29358291625976}`
| Poker Door                | `[3039161621] = {3039161621, -542955242, "p_door04x", 1301.438232421875, -6848.919921875, 42.56942367553711}`
| Fish Store Door           | `[3846393171] = {3846393171, -610439206, "p_doorbrafrench00lx", 1311.5870361328125, -6853.7373046875, 44.24026870727539}` <br> `[3503741947] = {3503741947, -484508503, "p_doorbrafrench00rx", 1312.2301025390625, -6852.533203125, 44.23392868041992}`

| Gunsmith                  | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[3344078356] = {3344078356, -1005172683, "p_door01x", 1299.595947265625, -6893.6494140625, 43.89895248413086}` <br> `[228958905] = {228958905, -1005172683, "p_door01x", 1298.026611328125, -6895.77099609375, 43.89789962768555}`

| House                     | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[1239946729] = {1239946729, -807564273, "p_door06x", 1347.348876953125, -6851.3515625, 54.61957550048828}`

| Lawyer                    | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[2456123803] = {2456123803, 990179346, "p_door_val_bank02", 1326.945068359375, -6872.25439453125, 47.98223495483398}`

| Office                    | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[1441044457] = {1441044457, -807564273, "p_door06x", 1322.768798828125, -6849.66845703125, 44.36957168579101}`

| Post Office               | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Postal Counter            | `[410511897] = {410511897, -29643421, "p_door11x", 1284.6561279296875, -6881.94921875, 43.77563858032226}`

| Smith                     | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[248613727] = {248613727, 381701909, "p_door_vanhorne_l_01x", 1360.40380859375, -6854.29736328125, 54.13664627075195}`
| Side Door                 | `[551038828] = {551038828, 381701909, "p_door_vanhorne_l_01x", 1355.827880859375, -6856.51025390625, 54.11066055297851}`

| Tower                     | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[3107291160] = {3107291160, -1446065143, "p_door_cinco_r_01x", 1342.04833984375, -6801.87109375, 46.58509063720703}` <br> `[3412927623] = {3412927623, -1446065143, "p_door_cinco_r_01x", 1343.320068359375, -6802.9345703125, 46.58509063720703}`


| Yellow House              | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[2872786559] = {2872786559, -1957055091, "p_door_val_genstore", 1344.358642578125, -6840.30712890625, 44.75150680541992}`
| Office Door               | `[2419034220] = {2419034220, -542955242, "p_door04x", 1346.255859375, -6836.82177734375, 44.74150848388672}`
| Kitchen Door              | `[3081000789] = {3081000789, -542955242, "p_door04x", 1351.262451171875, -6838.67138671875, 50.58788681030273}`
| 1st Balcony Door          | `[4270613800] = {4270613800, -1957055091, "p_door_val_genstore", 1343.6656494140625, -6837.359375, 50.56560134887695}`
| Bedroom Door              | `[3178914557] = {3178914557, -542955242, "p_door04x", 1351.2696533203125, -6838.65869140625, 54.57078552246094}`
| 2bd Balcony Door          | `[2782507968] = {2782507968, -1957055091, "p_door_val_genstore", 1343.6044921875, -6837.3330078125, 54.55964660644531}`