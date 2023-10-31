const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd70c45051mshe56de3013aead33p144409jsn5428019da911',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
 fetch(url,options).then(response=>{
   return response.json(); 
 }).then(data=>{
    //console.log(data.storyList[0].story);
    //console.log(data.storyList[0].story.hline);
    let head0=data.storyList[0].story.hline;
    let desc0=data.storyList[0].story.intro;
    const ntitle0= document.querySelector('#news-title0');
    ntitle0.innerHTML=head0;
    const ndes0= document.querySelector('#news-intro0');
    ndes0.innerHTML=desc0;

    let head1=data.storyList[2].story.hline;
    let desc1=data.storyList[2].story.intro;
    const ntitle1= document.querySelector('#news-title1');
    ntitle1.innerHTML=head1;
    const ndes1= document.querySelector('#news-intro1');
    ndes1.innerHTML=desc1;

    let head2=data.storyList[3].story.hline;
    let desc2=data.storyList[3].story.intro;
    const ntitle2= document.querySelector('#news-title2');
    ntitle2.innerHTML=head2;
    const ndes2= document.querySelector('#news-intro2');
    ndes2.innerHTML=desc2;

    let head3=data.storyList[4].story.hline;
    let desc3=data.storyList[4].story.intro;
    const ntitle3= document.querySelector('#news-title3');
    ntitle3.innerHTML=head3;
    const ndes3= document.querySelector('#news-intro3');
    ndes3.innerHTML=desc3;
 })