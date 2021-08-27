# UFOs

## Overwiew

The purpose of this project is to create a dynamic table that provides a in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. The user will be able to filter the information through the following categories:

- Date
- City
- State
- Country
- Shape

## Results

The webpage main view and its parts are shown in the following image:

![Image_tag](https://user-images.githubusercontent.com/83261520/131052278-d19adda5-2a8e-4b73-a049-5a81fb6674e5.png)

As seen on the image above the webapge has a few elements each one explained below:

1. Nav Bar - This navbar that goes by the title "UFO Sightings" helps the users refresh the webpage, this is particularly usefull in case the user wants a clean view for the site or to clean all applied filters (3. The user has to click on the title "UFO Sightnings" in order to apply its funtion. 
2. Introduction - This is main title of the webpage alongside a brief text about the contents of it, there is no particular function other than aesthetics and presentation.
3. Filter Search - This section contains the input boxes that the user has to fill in order to filter the data on the table in the right (4). The user has to type its serach on each of the corresponding boxes to filter the table by date, city, state, country, shape by using any combination of each one of them. After the user has finished typing its search, the filters are applied by either clicking outside of the box, presing enter, pressing tab, the latest its preferable to move to the next filter. If any filter wants to be removed the user can delete the entry and apply the filtering or by pressing the Nav Bar (1).
4. Table - This table contains all the information about UFO sightnings, it is clasified by date, city, state, country, shape, duration and comments. This shows all the data by default but it can be filterred as explained on the previous point (3)    

### Filter application

As seen on the image below a few filters were applied, date (1/1/2010) and city (el cajon), the table is automatically filtered and contains the specific information of such inputs, it is possible to filter even more, for example by writing the shape of the sightning.

Is important to mention that in order to filter, the user has to input the information exactly as it appears on the table, respecting spaces, capital letters, lower case letterss, abreviations and so on, otherwise it will return an empty table.

![applied filters](https://user-images.githubusercontent.com/83261520/131054320-8399547d-d1b2-470b-a3cf-5f7fd7a2dbed.png)

## Summary

This webpage is very useful to search for UFO sightnings nevertheless there is room for improvement, as mentioned before the user has to apply the search criteria by typing the information exactly as are shown on the table, there are no proximities on the search which means that the user has to be somewhat familiar with the data.

A few recommendations for further development could be:

- Modify all the filters to accept approximate values, for example by typing "b" in the city box it could eitheer shown the infomation for Benton and Bonita cities.
- Modify the date filter into a range filter, this way we can see the number of UFO sightning within a certain period of time.
