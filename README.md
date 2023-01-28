# Portfolio Website - Sai Tej Sunkara
### Using External CSS
> <link rel="stylesheet" href="styles/achievementsStyles.css">
> <link rel="stylesheet" href="styles/styles.css">
* In this assignment 2, as stated, I have used the external CSS files to include the styling in the website. I have used 2 external CSS files which are namaed styles.css and achievementsStyles.css
### Using favicon to uniquely identify the website
* I have designed a favicon through canva and used that favicon in my portfolio website. This gives the user that the website is unique and can open directly without any confusion
> <link rel="icon" type="image/png" href="assets/favicon.png">
### Float/Overflow Property
* In the website, we have a section called as navbar. This shows the navigation links of the webpage and on clicking, it moves onto the page. However, All these sections are kept in a nav tag and overflow is kept as hidden so that it doesn't slip the webpage to extend to rightside of screen whenever user checks in a smaller resolution screens
> overflow: hidden;
<img width="1440" alt="nav1" src="https://user-images.githubusercontent.com/113054762/215277854-b8f04bec-ad3b-45a0-867b-d440fbc4e3af.png">
<img width="1440" alt="nav2" src="https://user-images.githubusercontent.com/113054762/215277862-b75300a0-bbd8-4496-b414-7fd715dc6bd3.png">
### Using Column Layout
> In the frameworks like bootstrap, they provide a column layout to produce a responsive layout in a webpage. However, in this assignment, we are restricted to use the bootstrap. So I have created a column layout using vh and vw heights and widths.
> For example, lets check the card columns I have created for this webpage
> .headerCard {
    width: 99vw;
    height: 30vh;
}
.profileCard {
    width: 20vh;
    height: 20vh;
}
> This provides the below columns
<img width="1440" alt="columns" src="https://user-images.githubusercontent.com/113054762/215278016-52da3eb9-3652-4893-a5b6-735b2ca0c9d9.png"> 
### Usage of Absolute and Relative layouts whenever required.
> In the entire application, we have used absolute and relative layouts whenever needed by the design.
> For example, in header section, we have something known as profile card. This card displays the profile picture of mine and that profile picture should be displayed in absolute position to the header card.
> So, to use that we have used a following properties in CSS,
> .profileCard {
    position: absolute;
    width: 20vh;
    height: 20vh;
    background-image: url(../assets/profile.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 20vh 0vh 0 10vh;
}
> This has provided a following output.
<img width="1440" alt="profile pic" src="https://user-images.githubusercontent.com/113054762/215278268-8cc2c33a-c4e5-4ca4-a1a0-fcd566e73d11.png">
