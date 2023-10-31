const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd70c45051mshe56de3013aead33p144409jsn5428019da911',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
fetch(url,options)
  .then(response => response.json())
  .then(data => {
    let seriesname=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.seriesName;
    let matchno=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.matchDesc;
    let matchformat=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.matchFormat;
    const series=document.querySelector(".card-title");
    series.innerHTML=seriesname+"-"+matchno+"-"+matchformat;

    let teamn1=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team1.teamSName;
    const name1=document.querySelector("#name1");
    name1.innerHTML=teamn1;

    let teamn2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team2.teamSName;
    const name2=document.querySelector("#name2");
    name2.innerHTML=teamn2;

    let teamr1=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.runs; 
    let teamw1=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.wickets;
    let teamo1=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.overs;
    const score1=document.querySelector("#score1");
    score1.innerHTML=teamr1+"-"+teamw1+"("+teamo1+")" ;

    let teamr2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchScore.team2Score.inngs1.runs; 
    let teamw2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchScore.team2Score.inngs1.wickets;
    let teamo2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchScore.team2Score.inngs1.overs;
    const score2=document.querySelector("#score2");
    score2.innerHTML=teamr2+"-"+teamw2+"("+teamo2+")" ;

    let sts=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.status;
    document.querySelector("#mstatus");
    mstatus.innerHTML=sts;

    //score2
    
    let seriesname2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.seriesName;
    let matchno2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchInfo.matchDesc;
    let matchformat2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchInfo.matchFormat;
    const series2=document.querySelector("#sccard2");
    series2.innerHTML=seriesname2+"-"+matchno2+"-"+matchformat2;

    let teamn12=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchInfo.team1.teamSName;
    const name12=document.querySelector("#name12");
    name12.innerHTML=teamn12;

    let teamn22=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchInfo.team2.teamSName;
    const name22=document.querySelector("#name22");
    name22.innerHTML=teamn22;

    let teamr12=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchScore.team1Score.inngs1.runs; 
    let teamw12=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchScore.team1Score.inngs1.wickets;
    let teamo12=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchScore.team1Score.inngs1.overs;
    const score12=document.querySelector("#score12");
    score12.innerHTML=teamr12+"-"+teamw12+"("+teamo12+")" ;

    let teamr22=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchScore.team2Score.inngs1.runs; 
    let teamw22=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchScore.team2Score.inngs1.wickets;
    let teamo22=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchScore.team2Score.inngs1.overs;
    const score22=document.querySelector("#score22");
    score22.innerHTML=teamr22+"-"+teamw22+"("+teamo22+")" ;

    let sts2=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[1].matchInfo.status;
    document.querySelector("#mstatus2");
    mstatus2.innerHTML=sts2;

if(teamw1== undefined){
  teamw1=0;
}


   // console.log(data.typeMatches[0].seriesMatches[0].seriesAdWrapper.seriesName);
   console.log(data);
    //console.log(data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team2.teamSName);
   // console.log(data.typeMatches[0].seriesMatches[0].seriesAdWrapper);
 })