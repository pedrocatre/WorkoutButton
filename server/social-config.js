ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

if(inProduction()) {
    console.log('in prod');
    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: facebookConfig.prod.appId,
        secret: facebookConfig.prod.secret
    });
} else {
    console.log('in dev');
    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: facebookConfig.dev.appId,
        secret: facebookConfig.dev.secret
    });
}

