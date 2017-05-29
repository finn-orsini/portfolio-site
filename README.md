# seraphinaorsini.com

This project is my personal portfolio site for future development projects and photography. 

## Basics

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is published with [Surge](https://surge.sh/)

##### Why not GitHub Pages?

Since I use the library professionally, I really wanted to build this website using [React](https://facebook.github.io/react/).
Also, since figuring out boilerplate is not my strong suit, I used `create-react-app` to get up and running quickly.
The `create-react-app` user guide has [steps](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages) to connect to [GitHub Pages](https://pages.github.com/), however these steps require using the `gh-pages` branch of a project for publishing. Because this is a user site,
GitHub Pages requires the branch used for publishing to be `master`. I'm sure with more digging I could find a way to use
GitHub Pages and `create-react-app` on `master` - but again, I like to get up and running quickly, with minimal time spent on stackOverflow.

##### Enter Surge.sh

The publishing solution I settled on is [Surge.sh](https://surge.sh/). In short - it's awesome. Originally, I used `npm run build` to build the
`create-react-app` project, and then `surge <path_to_build_directory>` to publish. Even more convenient, surge has git hooks to publish any time
you `push` to simplify your workflow further. I highly recommend taking a look at the docs and publishing a site with it today. It'll take you two minutes - tops.
