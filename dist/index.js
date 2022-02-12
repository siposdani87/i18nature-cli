(()=>{"use strict";var e={644:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(167)),u=n(257),l=n(888),c=n(707),s=n(262);t.default=function(e){return r(void 0,void 0,void 0,(function(){var t,n;return o(this,(function(i){switch(i.label){case 0:return(0,l.logHeader)("DOWNLOAD"),e.existsProjectConfigFile?[3,2]:[4,(0,u.missingProjectConfigFile)(e)];case 1:return[2,i.sent()];case 2:return t=(0,u.getProjectConfig)(e.configFilePath),n=(0,c.getDownloadTasksFromTranslationFiles)(t.translation_files,(function(e,n){return r(void 0,void 0,void 0,(function(){var r,i,u,l;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,a.default.get("/api/translation-files/".concat(null!==(u=e.id)&&void 0!==u?u:null,"/download"),{params:{locale:n.locale,api_key:t.project_api_key}})];case 1:return r=o.sent(),(0,s.writeContent)(n.path,r.data.content),[3,3];case 2:return i=o.sent(),[2,Promise.reject(new Error(null!==(l=i.response.data.message)&&void 0!==l?l:i.message))];case 3:return[2]}}))}))})),[4,(0,c.runTasks)(n)];case 3:return i.sent(),[2]}}))}))}},133:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.upload=t.init=t.download=void 0;var o=n(644);Object.defineProperty(t,"download",{enumerable:!0,get:function(){return r(o).default}});var i=n(339);Object.defineProperty(t,"init",{enumerable:!0,get:function(){return r(i).default}});var a=n(877);Object.defineProperty(t,"upload",{enumerable:!0,get:function(){return r(a).default}})},339:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(167)),l=n(257),c=n(888),s=n(707);t.default=function(e){return o(void 0,void 0,void 0,(function(){var t,n;return i(this,(function(a){switch(a.label){case 0:return(0,c.logHeader)("INIT"),e.overwriteConfigFile?[3,2]:(t=[{title:"Create config file: ".concat(e.configFilePath),task:function(){return Promise.reject(new Error("Config file overwrite is not allowed!"))}}],[4,(0,s.runTasks)(t)]);case 1:return[2,a.sent()];case 2:return n=[{title:"Create config file: ".concat(e.configFilePath),task:function(){return o(void 0,void 0,void 0,(function(){var t,n,o,a,c;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,u.default.get("/api/projects/init",{params:{api_key:e.projectApiKey}})];case 1:return t=i.sent(),n=t.data.translation_files.map((function(t){return r(r({},t),{directory:e.directory})})),o=(0,l.createProjectConfig)(e.projectApiKey,n),[4,(0,l.saveProjectConfig)(e.configFilePath,o)];case 2:return i.sent(),[3,4];case 3:return a=i.sent(),[2,Promise.reject(new Error(null!==(c=a.response.data.message)&&void 0!==c?c:a.message))];case 4:return[2]}}))}))}}],[4,(0,s.runTasks)(n)];case 3:return a.sent(),[2]}}))}))}},877:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(167)),u=n(257),l=n(888),c=n(707),s=n(262);t.default=function(e){return r(void 0,void 0,void 0,(function(){var t,n;return o(this,(function(i){switch(i.label){case 0:return(0,l.logHeader)("UPLOAD"),e.existsProjectConfigFile?[3,2]:[4,(0,u.missingProjectConfigFile)(e)];case 1:return[2,i.sent()];case 2:return t=(0,u.getProjectConfig)(e.configFilePath),n=(0,c.getUploadTasksFromTranslationFiles)(t.translation_files,(function(n,i){return r(void 0,void 0,void 0,(function(){var r,u,l,c,f;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,a.default.post("/api/translation-files/".concat(null!==(l=n.id)&&void 0!==l?l:null,"/upload"),{translation_file:n,content:(0,s.readContent)(i.path)},{params:{overwrite:e.overwriteTranslations,locale:i.locale,api_key:t.project_api_key}})];case 1:return r=o.sent(),n.id=null!==(c=r.data.translation_file_id)&&void 0!==c?c:n.id,[3,3];case 2:return u=o.sent(),[2,Promise.reject(new Error(null!==(f=u.response.data.message)&&void 0!==f?f:u.message))];case 3:return[2]}}))}))})),n.push({title:"Modified config file: ".concat(e.configFilePath),task:function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,(0,u.saveProjectConfig)(e.configFilePath,t)];case 1:return n.sent(),[2]}}))}))}}),[4,(0,c.runTasks)(n)];case 3:return i.sent(),[2]}}))}))}},354:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(167)),l=a(n(147)),c=a(n(290)),s=a(n(17)),f=a(n(760)),d=n(758),p=n(541),h=n(145),v=n(133),b=function(e){switch(e){case"init":return h.Action.INIT;case"upload":return h.Action.UPLOAD;case"download":return h.Action.DOWNLOAD;default:return h.Action.NONE}},y=function(e){return o(void 0,void 0,void 0,(function(){var t,n,o,a;return i(this,(function(i){switch(i.label){case 0:return e.skipPrompts?[2,e]:(t=[],n=e.projectApiKey===p.DEFAULT_API_KEY,e.action===h.Action.INIT&&e.existsProjectConfigFile&&t.push({type:"confirm",name:"overwriteConfigFile",message:"Overwrite existing ".concat(e.configFileName," file?"),default:!1}),e.action===h.Action.INIT&&(o={project_api_key:e.projectApiKey},e.existsProjectConfigFile&&(o=JSON.parse(l.default.readFileSync(e.configFilePath,"utf8"))),t.push({type:"input",name:"project_api_key",message:"Project API key?",default:o.project_api_key,when:function(e){return e.overwriteConfigFile||n}}),t.push({type:"input",name:"directory",message:"Relative path of translation files directory?",default:"example/locales",when:function(t){return t.overwriteConfigFile||!e.existsProjectConfigFile}})),[4,c.default.prompt(t)]);case 1:return a=i.sent(),[2,r(r({},e),{projectApiKey:e.projectApiKey!==p.DEFAULT_API_KEY?e.projectApiKey:a.project_api_key,overwriteConfigFile:a.overwriteConfigFile||!e.existsProjectConfigFile,directory:e.directory||a.directory})]}}))}))},_=function(e){return o(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:switch(u.default.defaults.baseURL=e.debug?p.DEBUG_BASE_URL:p.BASE_URL,e.action){case h.Action.INIT:return[3,1];case h.Action.UPLOAD:return[3,3];case h.Action.DOWNLOAD:return[3,5]}return[3,7];case 1:return[4,(0,v.init)(e)];case 2:case 4:case 6:return[2,t.sent()];case 3:return[4,(0,v.upload)(e)];case 5:return[4,(0,v.download)(e)];case 7:return[3,8];case 8:return[2]}}))}))};t.default=function(e){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,(r=e,o(void 0,void 0,void 0,(function(){var e,t,n;return i(this,(function(o){switch(o.label){case 0:return[4,(0,f.default)((0,d.hideBin)(r)).epilogue("for more information, find our website at https://i18nature.com").usage("Command-line tool of I18Nature localization tool.\n\nUsage: $0 <cmd> [args]").command("init [project_api_key]","Create .i18naturerc.json file.",(function(e){return e.positional("project_api_key",{describe:"project to bind on",default:p.DEFAULT_API_KEY})}),(function(e){e.verbose&&console.info("create config file of: ".concat(e.project_api_key))})).command("upload","Upload translation files.",(function(e){return e}),(function(e){e.verbose&&console.info("upload translation file")})).command("download","Download translation files.",(function(e){return e}),(function(e){e.verbose&&console.info("download translation file")})).options({help:{type:"boolean",alias:"h",description:"Show help",global:!1},verbose:{type:"boolean",alias:"v",description:"Run with verbose logging",global:!0},yes:{type:"boolean",alias:"y",description:"Skip prompts",global:!0},debug:{type:"boolean",description:"Debug mode",global:!0},overwriteTranslations:{type:"boolean",description:"Overwrite translation files on upload",global:!0}}).argv];case 1:return e=o.sent(),t=e.debug?p.DEBUG_FILENAME:p.FILENAME,n=s.default.join(p.CURRENT_WORK_DIR,t),[2,{projectApiKey:e.project_api_key,skipPrompts:e.yes||!1,verbose:e.verbose||!1,debug:e.debug||!1,overwriteConfigFile:!1,overwriteTranslations:e.overwriteTranslations||!1,configFileName:t,configFilePath:n,directory:"",existsProjectConfigFile:l.default.existsSync(n),action:b(e._[0])}]}}))})))];case 1:return t=n.sent(),[4,y(t)];case 2:return t=n.sent(),[4,_(t)];case 3:return n.sent(),[2]}var r}))}))}},607:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(354);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},541:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.INDENT=t.GREEN_COLOR=t.BASE_URL=t.DEBUG_BASE_URL=t.CURRENT_WORK_DIR=t.DEBUG_FILENAME=t.FILENAME=t.DEFAULT_API_KEY=void 0,t.DEFAULT_API_KEY="API_KEY",t.FILENAME=".i18naturerc.json",t.DEBUG_FILENAME=".i18naturerc-debug.json",t.CURRENT_WORK_DIR=process.cwd(),t.DEBUG_BASE_URL="http://localhost",t.BASE_URL="https://app.i18nature.com",t.GREEN_COLOR="#0A4414",t.INDENT=2},262:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.writeContent=t.readContent=t.getDownloadFileInfosOfTranslationFile=t.getUploadFileInfosOfTranslationFile=void 0;var o=r(n(230)),i=r(n(17)),a=r(n(147)),u=n(541),l=function(e){var t,n=null!==(t=e.directory)&&void 0!==t?t:"",r="".concat(e.filename,".").concat(e.extension),o=i.default.join(u.CURRENT_WORK_DIR,n,r);return[o,c(o,"*")]},c=function(e,t){var n="*"===t?"*":function(e){return e.replace("_","-").split("-",2)[0]}(t);return e.replace("%language",n).replace("%locale",t)};t.getUploadFileInfosOfTranslationFile=function(e){var t=l(e),n=t[0],r=t[1],i=o.default.sync(r),a=[];return i.forEach((function(t){var r=function(e,t,n){return n.find((function(n){return c(t,n)===e}))}(t,n,e.locales);r&&a.push({path:t,locale:r})})),a},t.getDownloadFileInfosOfTranslationFile=function(e){var t=l(e)[0],n=[];return e.locales.forEach((function(e){var r=c(t,e);e&&n.push({path:r,locale:e})})),n},t.readContent=function(e){return a.default.readFileSync(e,"utf8")},t.writeContent=function(e,t){return a.default.writeFileSync(e,t)}},888:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.logError=t.logHeader=void 0;var o=r(n(22)),i=n(541);t.logHeader=function(e){return console.log(o.default.hex(i.GREEN_COLOR).bold(e))},t.logError=function(e){return console.error(o.default.red.bold(e))}},145:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Action=void 0,(n=t.Action||(t.Action={}))[n.NONE=0]="NONE",n[n.INIT=1]="INIT",n[n.UPLOAD=2]="UPLOAD",n[n.DOWNLOAD=3]="DOWNLOAD"},257:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.missingProjectConfigFile=t.saveProjectConfig=t.getProjectConfig=t.createProjectConfig=void 0;var a=i(n(147)),u=n(541),l=n(707);t.createProjectConfig=function(e,t,n){return void 0===n&&(n=1),{version:n,project_api_key:e,translation_files:t}},t.getProjectConfig=function(e){var t=a.default.readFileSync(e,"utf8");return JSON.parse(t)},t.saveProjectConfig=function(e,t){return r(void 0,void 0,void 0,(function(){return o(this,(function(n){return[2,a.default.writeFileSync(e,JSON.stringify(t,null,u.INDENT))]}))}))},t.missingProjectConfigFile=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t=[{title:"Missing config file: ".concat(e.configFilePath),task:function(){return Promise.reject(new Error("Create config file or init project!"))}}],[4,(0,l.runTasks)(t)];case 1:return[2,n.sent()]}}))}))}},707:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.runTasks=t.getDownloadTasksFromTranslationFiles=t.getUploadTasksFromTranslationFiles=void 0;var a=i(n(468)),u=n(262);t.getUploadTasksFromTranslationFiles=function(e,t){return l({title:"Upload translation file",subtitle:"Upload data of",translationFiles:e,fileInfoCallback:u.getUploadFileInfosOfTranslationFile,taskCallback:t})},t.getDownloadTasksFromTranslationFiles=function(e,t){return l({title:"Download translation file",subtitle:"Download data of",translationFiles:e,fileInfoCallback:u.getDownloadFileInfosOfTranslationFile,taskCallback:t})};var l=function(e){var t=[];return e.translationFiles.forEach((function(n){return r(void 0,void 0,void 0,(function(){return o(this,(function(i){return t.push({title:"".concat(e.title,": ").concat(n.name),task:function(){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(i){return t=[],e.fileInfoCallback(n).forEach((function(i){t.push({title:"".concat(e.subtitle,": ").concat(i.path),task:function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,e.taskCallback(n,i)];case 1:return t.sent(),[2]}}))}))}})})),[2,new a.default(t)]}))}))}}),[2]}))}))})),t};t.runTasks=function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,new a.default(e).run().catch((function(e){console.log(e)}))];case 1:return[2,t.sent()]}}))}))}},167:e=>{e.exports=require("axios")},22:e=>{e.exports=require("chalk")},230:e=>{e.exports=require("glob")},290:e=>{e.exports=require("inquirer")},468:e=>{e.exports=require("listr")},760:e=>{e.exports=require("yargs")},758:e=>{e.exports=require("yargs/helpers")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")}},t={},n=function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(607);exports.CLI=n.default})();