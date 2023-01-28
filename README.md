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
> <img width="1440" alt="nav1" src="https://user-images.githubusercontent.com/113054762/215277854-b8f04bec-ad3b-45a0-867b-d440fbc4e3af.png">
> <img width="1440" alt="nav2" src="https://user-images.githubusercontent.com/113054762/215277862-b75300a0-bbd8-4496-b414-7fd715dc6bd3.png">
* Figure 1 and Figure 2
### Using Column Layout
> In the frameworks like bootstrap, they provide a column layout to produce a responsive layout in a webpage. However, in this assignment, we are restricted to use the bootstrap. So I have created a column layout using vh and vw heights and widths.
> For example, lets check the card columns I have created for this webpage
> .headerCard {
> width: 99vw;
> height: 30vh;
> }
> .profileCard {
> width: 20vh;
> height: 20vh;
> }
> This provides the below columns
> <img width="1440" alt="columns" src="https://user-images.githubusercontent.com/113054762/215278016-52da3eb9-3652-4893-a5b6-735b2ca0c9d9.png"> 
* Figure 3
### Usage of Absolute and Relative layouts whenever required.
> In the entire application, we have used absolute and relative layouts whenever needed by the design.
> For example, in header section, we have something known as profile card. This card displays the profile picture of mine and that profile picture should be displayed in absolute position to the header card.
> So, to use that we have used a following properties in CSS,
> .profileCard {
> position: absolute;
> width: 20vh;
> height: 20vh;
> background-image: url(../assets/profile.png);
> background-size: cover;
> background-position: center;
> background-repeat: no-repeat;
> margin: 20vh 0vh 0 10vh;
> }
> This has provided a following output.
> <img width="1440" alt="profile pic" src="https://user-images.githubusercontent.com/113054762/215278268-8cc2c33a-c4e5-4ca4-a1a0-fcd566e73d11.png">
* Figure 4
### Using Tel, Mailto options in Contact Box
> In the application, we have something known as tel and mailto hrefs in anchor tags. In the contact information box, we have various images which leads to contact me from the person viewing the portfolio. There we have used these.
> href="mailto:sunkara.sai@northeastern.com"
> href="tel:+18573761538"
> href="https://github.com/sstej88"
> href="https://linkedin.com/in/sstej88"
> <img width="1275" alt="contact box" src="https://user-images.githubusercontent.com/113054762/215278507-378079b7-84af-4c14-958b-5be7f48fdd45.png">
> <img width="1440" alt="mailto" src="https://user-images.githubusercontent.com/113054762/215278512-288ca426-3d1d-4488-91bb-4d992d20c532.png">
* Figure 5 and Figure 6
### Using CSS Selectors
> CSS selectors are the precedency operators which will guide the webpage to render the correct output as required by the developer.
> There are slectors used in our application such as :hover, .class element, element .class, etc.
> <img width="1440" alt="selectors 1" src="https://user-images.githubusercontent.com/113054762/215278766-14f8e137-f058-496b-b71c-212b0b04a7dc.png">
> <img width="1440" alt="selectors 2" src="https://user-images.githubusercontent.com/113054762/215278772-e89d6f85-768d-486f-9a55-3d5382008c67.png">
* Figure 7 and Figure 8
### Professional Image Gallery - Containing hover effects, captions
> In the achievements section, we have a displayed portfolio, which contains the certificates and team of mine right back during my internship days. I have included them using the image tags and has given various effects through container, hover tags, horizontal and vertical flex with wraps and box shadows.
> <img width="1440" alt="ImageGallery" src="https://user-images.githubusercontent.com/113054762/215279000-398d2f61-da49-45f2-99e1-9abe606d3b1b.png">
> <img width="1440" alt="ImageGallery2" src="https://user-images.githubusercontent.com/113054762/215279012-2a35ce26-9ee9-4782-9147-00d1b84d54f7.png">
* Firgure 9 and Figure 10
### Using HTML and HTML5 Elements
> In this website, I have used only HTML and HTML5 elements which are supported by browsers such as head, link, meta, h1 etc.
> I have also used the advanced div and span tags in the portfolio
### Responsive website
> As the given statements in the assignment, I have made the website responsive to every device in the developer tools. For this, I have used the media queries whenever required and achieved the responsiveness of the website.
> For example, I have used the below stated media queries in the portfolio portal to achieve the actual required output in the desktop screen. Here I have used the mobile first approach. So those tags are perfectly used for the mobile screens as well as for desktop screens.
> @media only screen and (max-width: 900px) {
>    .profileTitle {
>        margin: 10vh 0vh 0vh 0vh;
>        font-family: 20px;
>    }
>    #mrTag {
>        font-size: 20px;
>    }
>    .aboutTableDesktop {
>        display: flex;
>        flex-wrap: wrap;
>    }
>    .aboutTableDesktop td {
>        padding: 0px;
>        width: 50vw;
>        text-justify: newspaper;
>    }
>    .aboutCard {
>        height: 50vh;
>    }
>    .noMobileDisplay {
>        display: none;
>    }
>    .educationCard {
>        height: 50vh;
>        width: 80vw;
>    }
>    .logo {
>        height: 50px;
>        width: 50px;
>        margin: 10px;
>        border-radius: 5px;
>        cursor: pointer;
>        transition: all 0.3s ease-in-out;
>    }
>    .logo:hover {
>        height: 30px;
>        width: 30px;
>        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
>        transition: all 0.3s ease-in-out;
>    }
>    .contactCard {
>        height: 30vh;
>    }
> }
> <img width="1440" alt="desktop" src="https://user-images.githubusercontent.com/113054762/215279408-16bfd725-bb27-4afc-9633-30559d2f1e5c.png">
> <img width="1440" alt="mobile" src="https://user-images.githubusercontent.com/113054762/215279421-39dcae72-1f8a-435a-962c-2556b9c65440.png">
* Figure 11 and Figure 12
