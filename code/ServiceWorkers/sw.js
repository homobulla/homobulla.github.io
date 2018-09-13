if ('serviceWorker' in navigator) {
    //环境特性检查
    console.log('zhichi ')
    navigator.serviceWorker
        .register('/Technical-tree/code/ServiceWorkers/sw.js', {
            scope: '/Technical-tree/code/ServiceWorkers/'
        })
        // scope可使用的域范围,即service worker 控制的内容的子目录
        .then(function(reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope)
        })
        .catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error)
        })
} else {
    console.log('不支持sw')
}
