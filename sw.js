const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "jaggies"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f9c9d9fc93a01c085a15a694e63f79a5","url":"./2017/12/19/103ba3e4a835.html"},{"revision":"4042bae3e366b7df9e477cd69e59ad02","url":"./2017/12/21/5b8016b1834f.html"},{"revision":"27fe412eb89b72d121186a6dba3e4ac7","url":"./2017/12/21/83842e2f251f.html"},{"revision":"41346db73dbc8a132e7c58b8f486d5e9","url":"./2017/12/25/3a5b44d671b6.html"},{"revision":"4e2826c31d6ec3834e5ffe6fc2c943f5","url":"./2017/12/26/2a00e14d34f5.html"},{"revision":"2187d54911b4f598be64c0dc0e2642f8","url":"./2017/12/26/669e7b46d405.html"},{"revision":"71ec9c2b8fbb2b5075075a5e4a62ef12","url":"./2017/12/26/d03b71bc367c.html"},{"revision":"481df5934ac7015627362b5fb7a2783d","url":"./2017/12/26/f29039e0c557.html"},{"revision":"05943bdae69b7682fd616690424ebca4","url":"./2017/12/28/790985cb4957.html"},{"revision":"1970d580395a2c68dcd1b649b89a547c","url":"./2017/12/30/54a15046a4d4.html"},{"revision":"03162917a0e5449ce986e22cc544493f","url":"./2017/12/30/64c1951fa4bf.html"},{"revision":"920e6fe1e776f1d3334d6be246e67a9a","url":"./2017/12/30/9854b11baab4.html"},{"revision":"69049171aa17e723c2be650b04e61662","url":"./2017/12/30/d218002a591d.html"},{"revision":"d30f05fd3b5b7253955616d11864467d","url":"./2017/12/30/d430da0f206c.html"},{"revision":"244c9105b4ae0088c73f6c312408fead","url":"./2017/12/30/e15546fa28ad.html"},{"revision":"8bfc806e9129f6eedc3cd1d44d8f2bf4","url":"./2017/12/30/f6ffd4184e5e.html"},{"revision":"280ef496b2407b33eceef9f17a1970c5","url":"./2017/12/31/92ea79c6293a.html"},{"revision":"0603c5c1237f1fbc926b5e6182bf3370","url":"./2018/01/01/0e6c7f96e0f9.html"},{"revision":"ba1db8fcdb2c4b122d9877808ee0dbc8","url":"./2018/01/06/8ac5ba4f490e.html"},{"revision":"3eb4584f7c901b135e44ac3760d48c3f","url":"./2018/01/06/d45e3dbb6019.html"},{"revision":"b2b6cec310782d957fbd932c0d4f4662","url":"./2018/01/08/bac07c03beeb.html"},{"revision":"a7b465c37123e3acf188e9a93ca34ea5","url":"./2018/01/09/766c3d4ae9f8.html"},{"revision":"383150dac661f711642505fbe2e4ecfc","url":"./2018/01/16/53150f26f1ec.html"},{"revision":"5fd399b6db80e3904e3affdef2795f6c","url":"./2018/01/25/cf2d04ac09ae.html"},{"revision":"2bf4728252f39f98aa730fb1a743eb46","url":"./2018/01/27/c9f65d0de6f6.html"},{"revision":"1322ff0a4e0405593429fdf482d2dd09","url":"./2018/01/30/73f50b0ecf8a.html"},{"revision":"c492059e0fc51dd40b3be8965ef0d133","url":"./2018/02/15/4d65d8dc7aa3.html"},{"revision":"a24194f18703a720babcf4fb5fc87c53","url":"./2018/03/31/094d58c2150c.html"},{"revision":"d422e19295699a4d9a448f667c56c315","url":"./2018/03/31/1c3de7f319e2.html"},{"revision":"971deccc9caf705b5e06c5d19fed6bdc","url":"./2018/03/31/5cdee86432b5.html"},{"revision":"be459c95dfaff6aff088e129fba1ce53","url":"./2018/04/07/87987735ef23.html"},{"revision":"a5268da720f718b763ef71d98e044ad6","url":"./2018/08/18/3cf906a16cdd.html"},{"revision":"60a761157de8494ef31c7f5528fd1bf5","url":"./2018/08/18/bba0f678aef8.html"},{"revision":"aa200dfc7c13e9f7d38d3333c7ad6398","url":"./2018/09/24/749cd7055b9d.html"},{"revision":"1198477ec9406f2417c07a642f5a4297","url":"./2018/09/24/c4cbc1a5e76f.html"},{"revision":"000dd009cdd1f7d73ee5b98d2c96fb36","url":"./2018/09/24/e0c7abbf2bb1.html"},{"revision":"0cc7b86842e903d67fdf37beb715cfd5","url":"./2018/09/25/6e57b15ba6da.html"},{"revision":"a0d3b6862fcd80b2be0d7408a8e92125","url":"./2018/09/29/a9adff2e5352.html"},{"revision":"df3295296e6a8a2eba65553df4bd9734","url":"./2018/09/30/ee44cdfa24d0.html"},{"revision":"688ab3581f41a10c83a80227164f8c42","url":"./2018/10/31/8cdc42df8a16.html"},{"revision":"d4421bcb5a5267392bcf5b755e572a2b","url":"./2018/11/06/df42019cc465.html"},{"revision":"e598b93e1d0387797e5980cf0a37e042","url":"./2018/11/17/7622bdf9a5d8.html"},{"revision":"73e13b9b35929e6ed2c90f61be92cffb","url":"./2018/11/30/ca8772f26bcb.html"},{"revision":"87b7a4e41b89f08f315cee5c41a6452f","url":"./2018/12/02/88f7bae7638d.html"},{"revision":"eb73446f95dfe3d3be8fd4db1176ac95","url":"./2018/12/16/77d26d45a1ce.html"},{"revision":"ff02efc81bd2d3665f62635e3caf5f02","url":"./2019/01/11/620aacbc2544.html"},{"revision":"73c1166753944e9bfa810f8051989822","url":"./2020/11/07/8c04fb45d635.html"},{"revision":"2c33c5ed622ed1f7d8c2107839baa413","url":"./2020/11/12/f5f90233834e.html"},{"revision":"2f6a547d6a548689505e1048dcd7124b","url":"./2020/11/14/991e072aaa6f.html"},{"revision":"b9283cab158cf6901626da16534bdaa9","url":"./2020/11/15/67111d4cc67a.html"},{"revision":"4d78df7558c73b348774098a0e026cf5","url":"./2021/01/11/fe653e503611.html"},{"revision":"1be18c29b1b29380f71a6b9c372afedc","url":"./2021/01/18/38be76b81723.html"},{"revision":"5064fe6d6e1af75800f09863b6345a90","url":"./2021/05/08/919a851d9cd5.html"},{"revision":"84650bf6555fe4fa99f7418585c6d772","url":"./2021/05/14/e9ab622cfede.html"},{"revision":"0df800cd0563a5a3a78351633e6a4a87","url":"./2021/05/15/44c86f9f725a.html"},{"revision":"76f098b6b74b1dd37ef2c77e2b5ba209","url":"./2021/05/16/2c85b990b932.html"},{"revision":"92f7e02e029e0223d3cd97a1194ca2d9","url":"./2021/05/20/9d77922cda47.html"},{"revision":"6d5b0ff22c1d411b053d15d419d55617","url":"./2021/05/22/2ed076987343.html"},{"revision":"4122a3f3083fcbbc7ba1a77a0ec7b4d4","url":"./2021/05/30/64c8afe299e8.html"},{"revision":"a0fe5b924c4acca4a17e8d00c210fcb7","url":"./2021/06/05/de78c0e3e388.html"},{"revision":"87078f23be6c74a45a8babe1ed5424e9","url":"./2021/06/09/eb12643f5d1e.html"},{"revision":"1d4415dca02d4841ef623704b0e2d9cf","url":"./2021/06/10/53525ea83b2b.html"},{"revision":"f6e872aaabe10690a830f66f827c3674","url":"./2021/07/03/9e0c64b00d47.html"},{"revision":"9bc1c5d014cc169479d7b98fbfeb453b","url":"./2021/07/10/60413caefef0.html"},{"revision":"c3b78e82db52fede51bcc4e525279151","url":"./2021/07/25/1299e01750b7.html"},{"revision":"1f369d9622bfd6742ad09e6788c4339c","url":"./2021/08/14/ef33651bdc85.html"},{"revision":"88347d2aacd38abf4ee936fa5eca3136","url":"./2021/08/21/adcbe1567140.html"},{"revision":"d4bf2326431a927938d52a85ff02f3df","url":"./2022/03/09/9e7d221feb02.html"},{"revision":"bf58f98abf58f8c513c8f9314a26c77a","url":"./2022/03/12/3f3f9f27edb1.html"},{"revision":"db549401d5f6604a5f1a3e720a3fa231","url":"./2022/03/20/fbaf110dc90c.html"},{"revision":"cd40f89d74cc0e589b11e5237821b940","url":"./2022/03/26/4e992231543c.html"},{"revision":"5718c9662acce0a797da20a3045f340b","url":"./2022/05/04/8b4e76905052.html"},{"revision":"d77e54af3d4b23089cde5557939a9eb7","url":"./2023/03/02/54e349021e30.html"},{"revision":"7e2bdedc65a71561562b9dc4cab4925b","url":"./2023/05/01/22493bffd51e.html"},{"revision":"32b146b967d76b74497951100f4a34cd","url":"./2023/05/01/7287d65b6bc0.html"},{"revision":"feaf667d6d7891ea11113c54aaf9b91a","url":"./2023/05/02/38e97e9bbdf0.html"},{"revision":"03aa9b45f0313641ae75840384532e27","url":"./2023/05/02/9712a7092d6a.html"},{"revision":"813af0e4f241393c2a119e40433fe5ac","url":"./2023/05/04/1f8b284123ca.html"},{"revision":"f8779b2db693f49edef7e4be83e1ee19","url":"./2023/05/04/b29e26902a89.html"},{"revision":"fe192791a1b0cac8fae63a2f44280c08","url":"./2023/05/05/bc852159c7f6.html"},{"revision":"dd71bfff0f60b7e8e8ab44992f77e1b9","url":"./2023/05/14/00996dc0546d.html"},{"revision":"42a3d1187f1a347cf786a85c78294f26","url":"./2023/05/15/f986813d0d94.html"},{"revision":"5f390783af9ee4e426851ee2fd20e565","url":"./2023/05/20/f997e124837a.html"},{"revision":"309f2540bd56242d232169c916254190","url":"./2023/05/29/8154982c759c.html"},{"revision":"b0cc2c5073c3fab28d83bfc365f9149f","url":"./2023/06/03/b735be0f5723.html"},{"revision":"48120963ce2c13a402596fcf3d0aa07a","url":"./2023/06/05/ff306b2184fc.html"},{"revision":"d806dfb30cdc508402d5b45190f2210f","url":"./2023/06/12/cbeb3acfef26.html"},{"revision":"43e440b08cf1d399b1e3ab4f520b96d8","url":"./2023/07/12/524fd56f9760.html"},{"revision":"ebd0bd23574b3181dae103b6de69a4ab","url":"./2023/07/15/f74286649fc7.html"},{"revision":"ae1ad74347c9f0e811f0c121e30776f8","url":"./2023/07/16/44c822c98a72.html"},{"revision":"c4e7555ffcd1d1e3da5a84e6f634ac80","url":"./2023/07/17/49937ddf50aa.html"},{"revision":"ecd55d2660e9be183c47eac2f838fa42","url":"./2023/07/29/a22615e5cdae.html"},{"revision":"f4892c55cac2ff1c52dd7e85ba374491","url":"./404.html"},{"revision":"301d080d8778268c5d9f927c20719ecd","url":"./about/index.html"},{"revision":"dd62d140ac098570d21386ef1595952b","url":"./about/resume.html"},{"revision":"2d7819cdd391f59396b4ae0ea657633b","url":"./archives/2017/12/index.html"},{"revision":"785dcecf1e31903dbb5e2698fb058597","url":"./archives/2017/12/page/2/index.html"},{"revision":"31ffc193fcb076f0324e2ee4756c8f95","url":"./archives/2017/index.html"},{"revision":"274e1ca9f68816cb4ccf4116175e8a44","url":"./archives/2017/page/2/index.html"},{"revision":"5e08d7dd61ec7c468e21d84de8e73331","url":"./archives/2018/01/index.html"},{"revision":"bcb15fcbda9a8be8c3c81575b92e82e6","url":"./archives/2018/02/index.html"},{"revision":"0c8cddb1a0b053ebc6595910b576b428","url":"./archives/2018/03/index.html"},{"revision":"555c140052a41088c611f51d8ea88d4a","url":"./archives/2018/04/index.html"},{"revision":"eb329c9f6c168b9f122365edf21b839c","url":"./archives/2018/08/index.html"},{"revision":"5a2c78cfae759984c5b035b9da5892d8","url":"./archives/2018/09/index.html"},{"revision":"6b6bb9b102139ed83deeb7f2bd3bac0a","url":"./archives/2018/10/index.html"},{"revision":"74fcef3b98e6bbdf662f2bfb62549d84","url":"./archives/2018/11/index.html"},{"revision":"f8de6218dfcbcf2affdee449645e7fa8","url":"./archives/2018/12/index.html"},{"revision":"fc8ae1ab08405a08faee0385f848066c","url":"./archives/2018/index.html"},{"revision":"14d19567cb8ee1bdd3dc0669f0de76c0","url":"./archives/2018/page/2/index.html"},{"revision":"bd95d30109871c7f67f02c269ea0f85d","url":"./archives/2018/page/3/index.html"},{"revision":"a71f59c540125f260545db8d881583b3","url":"./archives/2019/01/index.html"},{"revision":"ec278c91feba9779066e635a3d55c772","url":"./archives/2019/index.html"},{"revision":"2a4d3d5712dc89130d5acc21cba0a69a","url":"./archives/2020/11/index.html"},{"revision":"d98aeec6fa5479a0e6920494d301c85d","url":"./archives/2020/index.html"},{"revision":"43f06ded9e55c7f8564cf861bfde5dc6","url":"./archives/2021/01/index.html"},{"revision":"69fb26f3a4366d941dc6fda1454e4675","url":"./archives/2021/05/index.html"},{"revision":"36977d168c40d60f622d5b52eb5e96af","url":"./archives/2021/06/index.html"},{"revision":"5ca45beecb3d92a2cabbb03aac0b6cf2","url":"./archives/2021/07/index.html"},{"revision":"34b199cf382c8103296b0b77bdc00c58","url":"./archives/2021/08/index.html"},{"revision":"fd4e32b05b7b7a44f73ac3c10a31ad29","url":"./archives/2021/index.html"},{"revision":"e36ca2ba909921062e5b3782e8897a95","url":"./archives/2021/page/2/index.html"},{"revision":"5f1472412c2ebdabef357593de20da72","url":"./archives/2022/03/index.html"},{"revision":"92b1f721e69900ac04ce44cd893f625b","url":"./archives/2022/05/index.html"},{"revision":"05a952dff47de31964c140c4198cb7aa","url":"./archives/2022/index.html"},{"revision":"f80b5d797f2f03450cb8b2482682619c","url":"./archives/2023/03/index.html"},{"revision":"03c6bca919828797bf434958280a6cb1","url":"./archives/2023/05/index.html"},{"revision":"e5f70394311c2b82c69b24538bf47b8f","url":"./archives/2023/05/page/2/index.html"},{"revision":"894a92a522d9bace465221041d34d439","url":"./archives/2023/06/index.html"},{"revision":"a914f3ef301c2fd88642d79192f39d6b","url":"./archives/2023/07/index.html"},{"revision":"d79aa9d6c64e6ee7f7fe74ab4101fca1","url":"./archives/2023/index.html"},{"revision":"d3f402ceb98ae17c7d9d1cc810d5d87f","url":"./archives/2023/page/2/index.html"},{"revision":"71f80e1be3d680994ed04bf7e1ceaa99","url":"./archives/index.html"},{"revision":"8a8485b7f24ee33b209128fc229bb563","url":"./archives/page/10/index.html"},{"revision":"af2571ba2bff9952186fd00ff586e12b","url":"./archives/page/2/index.html"},{"revision":"5464eedfee639a72bba1f968cf762f0e","url":"./archives/page/3/index.html"},{"revision":"3086e8462c79066084508fb8a1bfa343","url":"./archives/page/4/index.html"},{"revision":"0ae563f2385a81f543718d3a92c45c7f","url":"./archives/page/5/index.html"},{"revision":"f22bfec6c14a0b51031dfdccba0af55d","url":"./archives/page/6/index.html"},{"revision":"be387fea0f93efae4f240d3a24161164","url":"./archives/page/7/index.html"},{"revision":"fa80c2d121bbfc3967f36e7d8b5d91d6","url":"./archives/page/8/index.html"},{"revision":"72b4c894c41be7c004c543b432eaa444","url":"./archives/page/9/index.html"},{"revision":"9e159cf44f9f67a81dff277ce9d6aec7","url":"./categories/Android/index.html"},{"revision":"4f129cab527e0a1737a4d9ea6be1df9f","url":"./categories/Android/page/2/index.html"},{"revision":"76f9ba75302fee73e15592b97891c823","url":"./categories/Audiovisual/index.html"},{"revision":"4047c9e318d1d3dc64122ec18ee0d639","url":"./categories/Audiovisual/page/2/index.html"},{"revision":"8d477914684b09d40feb8f72db70de75","url":"./categories/Blog/index.html"},{"revision":"59be06ccdd559463d79a1de10cb65621","url":"./categories/C/index.html"},{"revision":"12ea7957b773a324046155ce9a3239e9","url":"./categories/CI/index.html"},{"revision":"d5079e6a9d4e021664b0f88b316b77d2","url":"./categories/Flutter/index.html"},{"revision":"635ad8fb9a88e666b803f82081fe0ba9","url":"./categories/Git/index.html"},{"revision":"d848c396fbbab5b7871c20d906d7cb2e","url":"./categories/Hybrid/index.html"},{"revision":"af3406b45392a308f20901092bce467a","url":"./categories/index.html"},{"revision":"c80bb7097ddaf965ea44e3ba6b1fbbc2","url":"./categories/Investment/index.html"},{"revision":"d51529e83ec50463140d1b2a0654c2a1","url":"./categories/Java/index.html"},{"revision":"7fb18d24a48dfb6eeb7fa96ce96bf81b","url":"./categories/Linux/index.html"},{"revision":"e432a9d6da2b716468747fc2adb24d0d","url":"./categories/OS/index.html"},{"revision":"d234a246fe2c33ece74383d4d8ee64cf","url":"./categories/Programing/index.html"},{"revision":"a5abc6793aa5c5f0c78af4d37750678e","url":"./categories/React-Native/index.html"},{"revision":"2812dcecc44a07420e51797fc28455e9","url":"./categories/Reading/index.html"},{"revision":"8fb36dd16bed5f478d88220cb471f11c","url":"./categories/Tool/index.html"},{"revision":"5ccae8f95e848e78d7de2b703f62c01c","url":"./categories/Web/index.html"},{"revision":"f76490e9bea528b543c5bec8b0760f0b","url":"./categories/Year-end/index.html"},{"revision":"25e2af3e0f493d6acd0edf87c48c7181","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"04168a3ca7d080851f2a7d98d847cdcd","url":"./google971f9b796ac24002.html"},{"revision":"8e49e7469eff5f7a63a8befb9c07998d","url":"./img/2020/AdditiveColor.webp"},{"revision":"5504bcece02f525089afe48211bcaca1","url":"./img/2020/ARGB_8888.webp"},{"revision":"a1ad1a9bffcc38ae35d46441e3dd6dae","url":"./img/2020/lenna_webp.webp"},{"revision":"62481105494092cf64947682bd6b95a0","url":"./img/2020/lenna.png"},{"revision":"bd6e7f0c5650c7d30b0353e0141efe54","url":"./img/2020/pcm_data.webp"},{"revision":"8cf2b95f6af6d4632643ad2b4373af62","url":"./img/2020/pcm_encoded_signal.webp"},{"revision":"c42aa8068e730369e1be801d181ef11e","url":"./img/2020/RGB_565.webp"},{"revision":"14221b9b96e9800eed40139ab1fcc4a0","url":"./img/2020/RGB_888.webp"},{"revision":"4c9db7dd94f2874fdd88dee58e962a51","url":"./img/2020/RGB_illumination.webp"},{"revision":"55b4c3a8e2d094e241589121c9a8335f","url":"./img/2020/SubtractiveColor.webp"},{"revision":"ea42caba5a6a81f5652b5d7cdb349e67","url":"./img/2020/wav_sound_format.webp"},{"revision":"03478f0d190496e34713ad0defef6a41","url":"./img/2020/YUV_stride.webp"},{"revision":"e0487bec06ebba5e312b7ed1a7298194","url":"./img/2020/YUV_UV_plane.webp"},{"revision":"84cd1f4abf207a8a662bdfbf7e8d6379","url":"./img/2021/17score.png"},{"revision":"44ec58dbd1b07cc26971a9c61bd7a612","url":"./img/2021/1st_debugging.jpg"},{"revision":"1fe0d51ef98f8550ec1adfab249d0227","url":"./img/2021/1st_f5_compiler.jpg"},{"revision":"3502546ebb1e9447bcd5ccbd81701fe8","url":"./img/2021/1st_f5.jpg"},{"revision":"406241c1e5d41cdca06147ff32df1127","url":"./img/2021/assets_and_liabilities.jpg"},{"revision":"a119d04095e06b6f89f47434c9d434fe","url":"./img/2021/cmake_configure.jpg"},{"revision":"e36d09b78d4247acb13c34edfb30c018","url":"./img/2021/cmake_run.jpg"},{"revision":"e8cb593ac8361f032cb2a6fb6439af79","url":"./img/2021/cost_of_invested_capital.jpg"},{"revision":"afd0b8504ad401453bb2bc6cc6d72362","url":"./img/2021/cpp_testmate_exeutables.jpg"},{"revision":"ecf1546401c78b42d3b1fa93279051d3","url":"./img/2021/cpp_testmate.jpg"},{"revision":"9db055d1c8ecbf0e6e61d3a9ee2e7f1d","url":"./img/2021/current_ratio.jpg"},{"revision":"6dc2520652a31ae1c8e2210f1ef282f2","url":"./img/2021/dangerffmpeg_output_screen.gif"},{"revision":"777a727cff0341a63011935119807bf1","url":"./img/2021/dangerffmpeg_screencap.jpeg"},{"revision":"c774b5763b5841bbaa2361968e7aad96","url":"./img/2021/dangerffmpeg_threads.gif"},{"revision":"8d0bcbe49a953a4486635f3ec3411715","url":"./img/2021/factors_affecting_financial_data.jpg"},{"revision":"a66c715a3bcd48e37ee3b4da988f98ae","url":"./img/2021/five_force.jpg"},{"revision":"99efa00d7986e343bb56bd2970eba12c","url":"./img/2021/head_buffer_overflow.png"},{"revision":"b9aa8cd6f2d0062eedcaa40687e8b3dd","url":"./img/2021/profit_funnel.jpg"},{"revision":"12f8aa6866a03b975e1febf8af2d4ef4","url":"./img/2021/profit_sheet.jpg"},{"revision":"68fa1d99c798b0c126b8bde111badfa7","url":"./img/2021/project_after_build.jpg"},{"revision":"0cbc2c754270b4e896dbde3370d3f4bb","url":"./img/2021/send_receive_state_machine.png"},{"revision":"6a1cdd60cd3fe5c77e6802345a11a870","url":"./img/2021/strategy.jpg"},{"revision":"36a33bbfb667cc3103b294b27f1f60c2","url":"./img/2021/va_mapping.png"},{"revision":"49d6243e94c9c8f3ceee003235ad3a1d","url":"./img/2022/consume_saving.jpg"},{"revision":"bbc7e60d2e16d392bdc91a032eaca25e","url":"./img/2022/execution_overview.jpg"},{"revision":"ce793778c0c2bb7c670f9ab9150a7cc1","url":"./img/2022/gdp_calculation.jpg"},{"revision":"e5435dfa044fd4fbdbe358d88673bfa1","url":"./img/2022/gdp_rate.jpg"},{"revision":"c5ec29f3d56e7a1318148b14b1704d0c","url":"./img/2022/lka.jpg"},{"revision":"56deb2b56ac51831e5a74d8792359714","url":"./img/2022/nationalwealth2gdp.jpg"},{"revision":"9ec2c2b66215e973cf132dcc601778d9","url":"./img/2022/plugin_breakpoint.jpg"},{"revision":"5e5537fcf0619d4989f13cd40b175125","url":"./img/2023/bloomfilter_bukets.png"},{"revision":"c6a2425e60d48e817d76a0be14bf785d","url":"./img/2023/cache-aside.png"},{"revision":"81881c23bae3e46841a4645c1b8f74b7","url":"./img/2023/consistent-hash-ring.png"},{"revision":"c7adccfbd7d07e2ae59f009c2b68ba06","url":"./img/2023/consistent-hash-simple.png"},{"revision":"a3ba110c1cb9a6ad6233bd40f1ab8745","url":"./img/2023/consistent-hash-virtual-nodes.png"},{"revision":"a76e6c13bdd21e2d76fbab995ab115a9","url":"./img/2023/ddd-anti-corruption.png"},{"revision":"eeba6bb746ee96f99c6e6280caf68c27","url":"./img/2023/ddd-building-blocks.png"},{"revision":"476899c62062c0d4b17c71d75808a7e9","url":"./img/2023/ddd-integrality.jpeg"},{"revision":"da1798a08cdc16f60c8365e7d08c3e71","url":"./img/2023/ddd-layers.png"},{"revision":"836dea0e8b7df4a58a2b6705dbce5dca","url":"./img/2023/ddd-sharedkernel.png"},{"revision":"38e75e7678005e009f0fb4a4752b6ad9","url":"./img/2023/lsm-tree.png"},{"revision":"e836e972cf993eb4beecf09e284cdcb4","url":"./img/2023/multithreadloggingserver.png"},{"revision":"54fea8804994412e2845e4a2a3675861","url":"./img/2023/reactor_connect.png"},{"revision":"f49f9b7c82a0913b0bc36ebcbdd1c77e","url":"./img/2023/reactor_send.png"},{"revision":"bccae56049280b737da731a1f98ff378","url":"./img/2023/reactor_uml.png"},{"revision":"c7b6261040bacf1b535098b45f7bdb85","url":"./img/2023/read-through.png"},{"revision":"aaaaf3ceb2d6f739ac8de509deafacc7","url":"./img/2023/write-back.png"},{"revision":"e9becdf51ce8828e9cd89bb5a6aae481","url":"./img/2023/write-through.png"},{"revision":"66153c06b426651075c83966d1e7d59e","url":"./img/404.jpg"},{"revision":"7a8c47cb5a2149c1a1af21e90ecd9ca7","url":"./img/favicon.png"},{"revision":"d686d00c300a4bc90ed91261d21a1919","url":"./img/friend_404.gif"},{"revision":"854894405546d4272d39150afb5abaa8","url":"./img/index_img.jpeg"},{"revision":"74e4dae158ce2ba42604188ceb5b6daf","url":"./img/pwa/144.png"},{"revision":"c53ad6e362dc3a71d449c3e0e79a4486","url":"./img/pwa/192.png"},{"revision":"e3805dc9d0c3e14e4b479171514acd85","url":"./img/pwa/256.png"},{"revision":"77d895c43486b1befecb2453df6296e3","url":"./img/pwa/512.png"},{"revision":"94f4f858c686f9880bd1118ac0c84a60","url":"./img/pwa/72.png"},{"revision":"30365a044b713a7a20d6175fc8b98784","url":"./img/pwa/96.png"},{"revision":"e3c66f2afe34d879358b923d3f6b26f8","url":"./img/pwa/apple-touch-icon.png"},{"revision":"7a7a8ff8e1f062678fe1c9716ac28747","url":"./img/pwa/favicon-16x16.png"},{"revision":"f2d9b739680153debff5b0c84e257dc2","url":"./img/pwa/favicon-32x32.png"},{"revision":"93014d6790d5a07e865e87ca6974faed","url":"./index.html"},{"revision":"0a109688edd47d4cc745d25c71cb6559","url":"./js/main.js"},{"revision":"9f72ef8b8fdda25a767a787cd4bf9121","url":"./js/search/algolia.js"},{"revision":"106895beff015bc24d36965440c0fed3","url":"./js/search/local-search.js"},{"revision":"0310e94ad716c794eadcb0fddfab0a2a","url":"./js/tw_cn.js"},{"revision":"5ababdf577f19dad461230cd061df72a","url":"./js/utils.js"},{"revision":"a1836310009a7bbd702a1f2a59832470","url":"./link/index.html"},{"revision":"6e4bfaf295bee90ed2fe815cc4b9b594","url":"./manifest.json"},{"revision":"2e2878a01291fe595625acf74fce28f7","url":"./page/10/index.html"},{"revision":"074fc3f36722b8daabb0c8ce0dc843b3","url":"./page/2/index.html"},{"revision":"8e3cd9e57bdc08530e17d97d10385d4a","url":"./page/3/index.html"},{"revision":"8ac5f3cfca54ea0a3885ef9a518fe864","url":"./page/4/index.html"},{"revision":"107d54102279fa440ece48bde6308260","url":"./page/5/index.html"},{"revision":"7ccad88462e1da61bade2f97eede0b9b","url":"./page/6/index.html"},{"revision":"a07b59407c4e50a134b0b2ba7aa3b919","url":"./page/7/index.html"},{"revision":"cbce95f2a119b6422190e68a55caeed5","url":"./page/8/index.html"},{"revision":"df18ab6672c45d78f06d7e8d23dbb542","url":"./page/9/index.html"},{"revision":"1d4e117a030ef4059f99b7cc17db9d75","url":"./tags/2017/index.html"},{"revision":"90571ec458461853e691ef80b7d4ac4b","url":"./tags/2018/index.html"},{"revision":"ba869892c5a472984b7afb07b873626e","url":"./tags/AAC/index.html"},{"revision":"a943ec8aefc0ca4d4eead7318a3d338e","url":"./tags/Activity/index.html"},{"revision":"edeabb242a6408bd055d017693b24f41","url":"./tags/AddressSanitizer/index.html"},{"revision":"5c2a3e25dcc034723bb6ca3bfb4e2e3e","url":"./tags/Android-SDK/index.html"},{"revision":"be14d9878cfcd4bfdd77779c81331310","url":"./tags/Annotation-Processor/index.html"},{"revision":"0e083c58114878c54637fb32ee94ae9f","url":"./tags/Annotation/index.html"},{"revision":"990e16485b8ab36392cbf5f56596f5bc","url":"./tags/AOF/index.html"},{"revision":"a6ab0f0d555876e272576ab331284174","url":"./tags/AOSP/index.html"},{"revision":"915089a58f92a439b4f8ca1671ede504","url":"./tags/BLoC/index.html"},{"revision":"7ae9a2e0213580399d055c73e7033ef6","url":"./tags/BuildOwner/index.html"},{"revision":"5391308069627f7a84feebf25aa4488a","url":"./tags/ButterKnife/index.html"},{"revision":"a44e06993ce355d1b9ee84ea15e6e985","url":"./tags/Cache/index.html"},{"revision":"00718e590553db1e6e2929cf9e3ff5be","url":"./tags/CentOS/index.html"},{"revision":"ca9cffb6feed85338bd47bdf81997e43","url":"./tags/Curl/index.html"},{"revision":"26a793afa214e3f96ee541ad64275933","url":"./tags/Dagger2/index.html"},{"revision":"fdefc7140f6302b933148ed599662b03","url":"./tags/Dart/index.html"},{"revision":"0506f3471cbee449b947083f2a10b682","url":"./tags/DI/index.html"},{"revision":"7e42c5b6e9f48e7c7e5c85a5f42a3239","url":"./tags/DiskLruCache/index.html"},{"revision":"4b0e1232b70c13b32f792b72a6b6b9d0","url":"./tags/Distributed-System/index.html"},{"revision":"81979dba1c7c9f929ed11d80846a238d","url":"./tags/Docker/index.html"},{"revision":"3047995e12f36289f0a52f15558ed532","url":"./tags/doubly-linked-list/index.html"},{"revision":"c43d90a37798666faa0f2ad583ad16a5","url":"./tags/Element/index.html"},{"revision":"c5ab5e9549efc72e4945810b9dcdf3ff","url":"./tags/Eviction/index.html"},{"revision":"8c855adb6f17cb72132f8a583217fe9d","url":"./tags/FFmpeg/index.html"},{"revision":"36cfb3e62667988e723e1b7f6f6099ac","url":"./tags/Financial-Investment/index.html"},{"revision":"62215dac2522cac9c38c58f19a457fd7","url":"./tags/Financial-statements/index.html"},{"revision":"70081f393c91c37f897510aa9e2ff81a","url":"./tags/GitHub-Flow/index.html"},{"revision":"889003a693183da140261eaeddbc66d9","url":"./tags/Github-Pages/index.html"},{"revision":"2456ff09f1561d1fc2565c906bb5c283","url":"./tags/GitLab-Flow/index.html"},{"revision":"56fbb49a3a63e902e42eadff161210b1","url":"./tags/Gitlab/index.html"},{"revision":"1a7bef3c0bd3d974c2d4cd789b8d0dd0","url":"./tags/Go/index.html"},{"revision":"9ad75e9d7bc13944f50003e1a8a3dcf1","url":"./tags/GoogleTest/index.html"},{"revision":"f4fe325f85e0bb0c811fbbbe8d380faa","url":"./tags/Hadoop/index.html"},{"revision":"88cd45ae7e7a9a0f2a9e437411b445f9","url":"./tags/Hash-Tables/index.html"},{"revision":"b77c24f2b9ee4e3359e132898cf1d811","url":"./tags/Hexo/index.html"},{"revision":"febc97370ee51ead45c9dac67c5b9763","url":"./tags/HTTP/index.html"},{"revision":"19f5823d308f803f699b1e6232174422","url":"./tags/I-O/index.html"},{"revision":"8a25df5c60e4a5d38d193ead22a45c67","url":"./tags/index.html"},{"revision":"e31fcc6b5949d092581fdb1678a0cd58","url":"./tags/Intset/index.html"},{"revision":"3c32929db80b7c1bbb7c43bbc6583cc5","url":"./tags/IOC/index.html"},{"revision":"fe9bed4774860bcd6b99223a6451fa22","url":"./tags/Jenkins/index.html"},{"revision":"10aede414d405555e1412bfaa4ee7ade","url":"./tags/Jetpack/index.html"},{"revision":"a10fd11099a6d7149979621b0167d655","url":"./tags/JSB/index.html"},{"revision":"2b6ff050d49f80542f0ff58b6814ca9f","url":"./tags/LeetCode/index.html"},{"revision":"1c710f8f586e48e24401fcb4061bae7e","url":"./tags/Lifecycle/index.html"},{"revision":"2ce23b61e8ea3b193d5c75a45c2b7f27","url":"./tags/LifeCycle/index.html"},{"revision":"e34650c8c4d3485dc2c44fb3e73bfccd","url":"./tags/LruCache/index.html"},{"revision":"1a345edcf521f98db21554ff83f40258","url":"./tags/MIT-6-824/index.html"},{"revision":"2cd406dbf28af697eca4560462fc6396","url":"./tags/Mixin/index.html"},{"revision":"954e3fc50dda372ec3af787b0d8df787","url":"./tags/mmap/index.html"},{"revision":"607ce4e863fd5b69614c394795a72138","url":"./tags/Object/index.html"},{"revision":"0a15a76b4043f9286a4c1a9e6b42cf6a","url":"./tags/OkHttp/index.html"},{"revision":"e2bd59caa00b29a40bc30210b901027f","url":"./tags/Paper/index.html"},{"revision":"0f4ebcf1d5323a94318a6d9c14d5c3b7","url":"./tags/PCM/index.html"},{"revision":"a49444efc9483969f5ba8bc703247ac7","url":"./tags/Picasso/index.html"},{"revision":"4f0963a2d28e95da471ee0829ee2cca4","url":"./tags/PipelineOwner/index.html"},{"revision":"0ce2e0d9d71990027322d131153dbab3","url":"./tags/PPM/index.html"},{"revision":"aa3177b3e9880fda07f4a34d08a8236b","url":"./tags/RDB/index.html"},{"revision":"7b83176024e51d16608099ef4cd9a968","url":"./tags/Reactor/index.html"},{"revision":"ed54e052f1bf9c8e98968610e6d006d0","url":"./tags/Redis/index.html"},{"revision":"058e500a2e1d6b9fe08811e61e16bb58","url":"./tags/Redis/page/2/index.html"},{"revision":"c384e3e92de4b5be0acb7fd0a4638b1f","url":"./tags/RenderObject/index.html"},{"revision":"db0a83771ef08803adb4121167347d0a","url":"./tags/Retrofit/index.html"},{"revision":"a4a18861fd6428d7175b88b68b554067","url":"./tags/SDL2/index.html"},{"revision":"4a2ea4c487bf59dea64c97ea5ca9576d","url":"./tags/SDS/index.html"},{"revision":"5137c7407b2c332ad6b3485d86d7fd09","url":"./tags/Shell/index.html"},{"revision":"92f5d51e065cc57ea19ae3975b03132b","url":"./tags/Skiplist/index.html"},{"revision":"31b1ba8233eed55c93db99ebc5f6ee4c","url":"./tags/SSH/index.html"},{"revision":"8c871d8f01e84482b3492d1cefc58868","url":"./tags/ThreadLocal/index.html"},{"revision":"cec6a0fa6502eb116fd36102d3840ddd","url":"./tags/Tools/index.html"},{"revision":"7580bbd5322e8c9f818a3c5a02a69c3e","url":"./tags/TypeScript/index.html"},{"revision":"ddaa60c7c6de6216aa92a550d706dde6","url":"./tags/Ubutnu/index.html"},{"revision":"e513a0b8491eafae306520d278e86343","url":"./tags/ViewModel/index.html"},{"revision":"112aea7a3d38cd2d42e873c782956dbc","url":"./tags/VSCode/index.html"},{"revision":"65fd9fbd0080d30cd1cf1e99f85a165e","url":"./tags/WebP/index.html"},{"revision":"2812365e5be996085857fa88531e4f1c","url":"./tags/Webview/index.html"},{"revision":"7d9ab9d3c759fbe46f900230606be513","url":"./tags/Widget/index.html"},{"revision":"08bf1abb00974e381dcc818b1eb8ce39","url":"./tags/Ziplist/index.html"},{"revision":"13e27faac6296af1599ae4886e77c87e","url":"./tags/zsh/index.html"},{"revision":"76bdf43cf0fe6e0595f2c9e99690e5f9","url":"./tags/国富论/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();