const row = document.querySelector('.row');
const continent = document.querySelector('#continent');
// const euro = document.querySelector('.euro')
// const dollar = document.querySelector('.dollar')
const converter =document.querySelector('.converter')
const buttonConvert = document.querySelector('.button')
const selectBase = document.querySelector('.select-base')
const subTitle = document.querySelector('.title')
const subTitle2 = document.querySelector('.title2')

console.log(continent.value)

buttonConvert.addEventListener('click', () => {
    let amount = converter.value || 0
    let app = selectBase.value
    fetch(`https://api.exchangerate.host/latest?base=${app}&symbols=USD,EUR,KGS,&amount=${amount}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.rates)
            subTitle.innerHTML = `Base currency: ${data.base}`
            if (data.base === 'USD'){
                subTitle2.innerHTML = `<span>EUR: ${data.rates.EUR.toFixed(2)}</span>
                                       <span>KGS: ${data.rates.KGS.toFixed(2)}</span>`
            } else if (data.base === 'EUR'){
                subTitle2.innerHTML = `<span>USD: ${data.rates.USD.toFixed(2)}</span>
                                       <span>KGS: ${data.rates.KGS.toFixed(2)}</span>`
            } else if (data.base === 'KGS'){
                subTitle2.innerHTML = `<span>EUR: ${data.rates.EUR.toFixed(2)}</span>
                                       <span>USD: ${data.rates.USD.toFixed(2)}</span>`
            }
            // dollar.innerHTML = Object.values(data.rates)[0].toFixed(2)
            // euro.innerHTML = Object.values(data.rates)[1].toFixed(2)
        })

})
continent.addEventListener('change', ()=> {
    let region = continent.value
    // if (continent.value === 'europe'){
    //     region = 'europe'
    // } else if (continent.value === 'asia'){
    //     region = 'asia'
    // } else if (continent.value === 'africa'){
    //     region = 'africa'
    // } else if (continent.value === 'americas'){
    //     region = 'americas'
    // } else if (continent.value === 'oceania'){
    //     region = 'oceania'
    // }
    console.log(region)

fetch (`https://restcountries.com/v3.1/region/${region}`)
    .then(response => response.json())
    .then(data => {
        row.innerHTML = ''
        data.map(country => {
            console.log(country)
            row.innerHTML += `<div class="col-4">
                                <div class="box">
                                    <div class="img-wrapper">
                                    <img src="${country.flags.png}" alt="flag">
                                    </div>
                                    <h3>${country.translations.rus.common}</h3>
                                    <div class="CapitalLocation">
                                        <div>
                                            Capital: <h4>${country.capital}</h4>
                                        </div>
                                        <div class="location">
                                            <div>Location:</div> <a href="${country.maps.googleMaps}" target="_blank"><svg width="14" height="21" viewBox="0 0 14 21" fill="#111111" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 7.54932C14 6.63006 13.8189 5.71981 13.4672 4.87053C13.1154 4.02125 12.5998 3.24958 11.9497 2.59957C11.2997 1.94956 10.5281 1.43394 9.67878 1.08216C8.8295 0.730377 7.91925 0.549316 7 0.549316C6.08075 0.549316 5.17049 0.730377 4.32122 1.08216C3.47194 1.43394 2.70026 1.94956 2.05025 2.59957C1.40024 3.24958 0.884626 4.02125 0.532843 4.87053C0.18106 5.71981 -1.36979e-08 6.63006 0 7.54932C0 8.93632 0.41 10.2263 1.105 11.3143H1.097C3.457 15.0093 7 20.5493 7 20.5493L12.903 11.3143H12.896C13.6164 10.1907 13.9995 8.88406 14 7.54932ZM7 10.5493C6.20435 10.5493 5.44129 10.2332 4.87868 9.67064C4.31607 9.10803 4 8.34497 4 7.54932C4 6.75367 4.31607 5.99061 4.87868 5.428C5.44129 4.86539 6.20435 4.54932 7 4.54932C7.79565 4.54932 8.55871 4.86539 9.12132 5.428C9.68393 5.99061 10 6.75367 10 7.54932C10 8.34497 9.68393 9.10803 9.12132 9.67064C8.55871 10.2332 7.79565 10.5493 7 10.5493Z" fill="#111111"/>
                                            </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div>Population: <h4>${country.population}</h4></div>
                                    <div>Area: <h4>${country.area}</h4></div>
                                </div>
            </div>`
        })
    })
})


