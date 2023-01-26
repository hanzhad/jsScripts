function queryParams() {
    const query = window.location.search.substring(1);
    const _params = query ? query.split('&').map((x) => x.split('=')): [];

    const params = {};

    _params.forEach(([key, value]) => {
        params[key] = value;
    })

    return params;
}
