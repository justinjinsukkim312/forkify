export const elements = {
    // dom selector for search button
    searchForm: document.querySelector('.search'),
    // dom selector for search value
    searchInput: document.querySelector('.search__field'),
    // dom selector for results area
    searchResultsList: document.querySelector('.results__list'),
    // dom selector for results parent container
    searchResults: document.querySelector('.results'),
    // dom selector for result pages 
    searchResultsPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
}

export const elementStrings = {
    loader: 'loader'
};
// reuseable function for spinner
// changed the class on our div
export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    // where and what were attaching
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    // class selector
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}