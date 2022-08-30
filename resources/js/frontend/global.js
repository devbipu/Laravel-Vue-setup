

export default {
	name: 'CommonApi',
	data(){
		return{

		}
	},
	methods: {
		async __callApi(methods, urls, dataObj){
			try{
				return await axios({
					method: methods,
					url: urls,
					data: dataObj
				});
			} catch (e){
				return e.response
			}
		},
		__c2c: function (value) {
			this.$Copy({
                text: value,
                showTip: false,
                success: () => {
                    this.$Notice.success({
                        title: `Great!`,
                        desc: `"${value}" Copyed to your Clipboard`,
                    })
                },
                error: () => {
                    this.$Notice.error({
                        title: `Opps!`,
                        desc:  `"${value}" Copy Faild`,
                    })
                }
            })
		}
	}
}