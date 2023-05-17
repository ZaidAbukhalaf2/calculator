const survivalParams = {
    "Full population": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00388246947380754,
                "Parameter2": 0,
                "Dapagliflozin": -0.377572650650328
            },
            "Weibull": {
                "Parameter1": 1.65289859333192,
                "Parameter2": 104.535796741338,
                "Dapagliflozin": 0.231621704517668
            },
            "Gompertz": {
                "Parameter1": 0.0601375256051574,
                "Parameter2": 0.00153563458320004,
                "Dapagliflozin": -0.385398856706897
            },
            "Lognormal": {
                "Parameter1": 5.2077681887695,
                "Parameter2": 1.47676875421209,
                "Dapagliflozin": 0.251513451611624
            },
            "Log-logistic": {
                "Parameter1": 1.69258210155203,
                "Parameter2": 98.3096435989183,
                "Dapagliflozin": 0.232346202083474
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00404764700823041,
                "Parameter2": 0,
                "Dapagliflozin": -0.605449842584478
            },
            "Weibull": {
                "Parameter1": 1.8294541246335,
                "Parameter2": 89.4451957694895,
                "Dapagliflozin": 0.33611012248427
            },
            "Gompertz": {
                "Parameter1": 0.06497478860538,
                "Parameter2": 0.0014755723615239,
                "Dapagliflozin": -0.615876910500638
            },
            "Lognormal": {
                "Parameter1": 4.90699081659799,
                "Parameter2": 1.28136694155265,
                "Dapagliflozin": 0.386291090269151
            },
            "Log-logistic": {
                "Parameter1": 1.87972414982518,
                "Parameter2": 84.0019606350789,
                "Dapagliflozin": 0.340009214577333
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000911773569229291,
                "Parameter2": 0,
                "Dapagliflozin": -0.206747082297961
            },
            "Weibull": {
                "Parameter1": 1.09041491627553,
                "Parameter2": 807.17505085947,
                "Dapagliflozin": 0.190020323760921
            },
            "Gompertz": {
                "Parameter1": 0.0065099581743472,
                "Parameter2": 0.000831979771436571,
                "Dapagliflozin": -0.207636868238018
            },
            "Lognormal": {
                "Parameter1": 8.17231750930469,
                "Parameter2": 2.47297080212065,
                "Dapagliflozin": 0.202517346095013
            },
            "Log-logistic": {
                "Parameter1": 1.09675348334697,
                "Parameter2": 782.992457218049,
                "Dapagliflozin": 0.189408328321417
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000109412828305885,
                "Parameter2": 0,
                "Dapagliflozin": -1.10690843202361
            },
            "Weibull": {
                "Parameter1": 2.29830992702324,
                "Parameter2": 346.768728337699,
                "Dapagliflozin": 0.48354381084054
            },
            "Gompertz": {
                "Parameter1": 0.0974639140065346,
                "Parameter2": 0.0000199604668528461,
                "Dapagliflozin": -1.10907823790866
            },
            "Lognormal": {
                "Parameter1": 7.36904252582034,
                "Parameter2": 1.47959551925261,
                "Dapagliflozin": 0.56256000390116
            },
            "Log-logistic": {
                "Parameter1": 2.30085942040126,
                "Parameter2": 345.587616929083,
                "Dapagliflozin": 0.483626544665803
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00266121493508915,
                "Parameter2": 0,
                "Dapagliflozin": -0.378584256398469
            },
            "Weibull": {
                "Parameter1": 1.37927033539661,
                "Parameter2": 182.900759200755,
                "Dapagliflozin": 0.275917384105947
            },
            "Gompertz": {
                "Parameter1": 0.036373134407395,
                "Parameter2": 0.00152957940897203,
                "Dapagliflozin": -0.380528381754821
            },
            "Lognormal": {
                "Parameter1": 5.89550105759805,
                "Parameter2": 1.75022414812423,
                "Dapagliflozin": 0.306142410791503
            },
            "Log-logistic": {
                "Parameter1": 1.4009648221738,
                "Parameter2": 173.011271346404,
                "Dapagliflozin": 0.279606906433351
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00132061188821875,
                "Parameter2": 0,
                "Dapagliflozin": -0.671053896539775
            },
            "Weibull": {
                "Parameter1": 1.17544249185755,
                "Parameter2": 460.380550843069,
                "Dapagliflozin": 0.572152560008612
            },
            "Gompertz": {
                "Parameter1": 0.0186109229937321,
                "Parameter2": 0.00100869194554128,
                "Dapagliflozin": -0.670347916276484
            },
            "Lognormal": {
                "Parameter1": 7.29590264387554,
                "Parameter2": 2.22807871452732,
                "Dapagliflozin": 0.718525111323783
            },
            "Log-logistic": {
                "Parameter1": 1.18483149339298,
                "Parameter2": 441.942942269493,
                "Dapagliflozin": 0.58074983677992
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000682468392633805,
                "Parameter2": 0,
                "Dapagliflozin": 0.0702142379049928
            },
            "Weibull": {
                "Parameter1": 0.984688136229548,
                "Parameter2": 1559.21708268797,
                "Dapagliflozin": -0.0713680229000269
            },
            "Gompertz": {
                "Parameter1": 0.00201311408080018,
                "Parameter2": 0.00066390666823143,
                "Dapagliflozin": 0.072033191246597
            },
            "Lognormal": {
                "Parameter1": 9.23826707500229,
                "Parameter2": 2.84392535539022,
                "Dapagliflozin": -0.0739807654886234
            },
            "Log-logistic": {
                "Parameter1": 0.98918176350547,
                "Parameter2": 1518.10660230229,
                "Dapagliflozin": -0.0726166898872824
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000794471109528379,
                "Parameter2": 0,
                "Dapagliflozin": -0.00796985100467148
            },
            "Weibull": {
                "Parameter1": 0.887213682650301,
                "Parameter2": 2053.13388585003,
                "Dapagliflozin": 0.0083898093811111
            },
            "Gompertz": {
                "Parameter1": -0.00733910575881316,
                "Parameter2": 0.000876742355284943,
                "Dapagliflozin": -0.00669108533841045
            },
            "Lognormal": {
                "Parameter1": 9.69037610913353,
                "Parameter2": 3.1456289823792,
                "Dapagliflozin": -0.00763142356580368
            },
            "Log-logistic": {
                "Parameter1": 0.891766884017303,
                "Parameter2": 1984.87283369092,
                "Dapagliflozin": 0.00750780542842145
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.0016974771453243,
                "Parameter2": 0,
                "Dapagliflozin": -0.384098315849303
            },
            "Weibull": {
                "Parameter1": 1.07943797590373,
                "Parameter2": 469.401131662787,
                "Dapagliflozin": 0.35626983063943
            },
            "Gompertz": {
                "Parameter1": 0.0249940650422816,
                "Parameter2": 0.00117578308045703,
                "Dapagliflozin": -0.385528407057727
            },
            "Lognormal": {
                "Parameter1": 7.49702544390445,
                "Parameter2": 2.485338750102,
                "Dapagliflozin": 0.485423528760787
            },
            "Log-logistic": {
                "Parameter1": 1.08915873648035,
                "Parameter2": 448.084432213878,
                "Dapagliflozin": 0.361696303022461
            }
        }
    },
    "Aged ≥ 65 years": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00311713974934954,
                "Parameter2": 0,
                "Dapagliflozin": -0.371828849058896
            },
            "Weibull": {
                "Parameter1": 1.53826522478595,
                "Parameter2": 133.073602485061,
                "Dapagliflozin": 0.245207778431315
            },
            "Gompertz": {
                "Parameter1": 0.0560460159264093,
                "Parameter2": 0.00133410323656034,
                "Dapagliflozin": -0.379547119825645
            },
            "Lognormal": {
                "Parameter1": 5.57325986378016,
                "Parameter2": 1.61377891142465,
                "Dapagliflozin": 0.246935275068907
            },
            "Log-logistic": {
                "Parameter1": 1.56489398913088,
                "Parameter2": 126.534885597532,
                "Dapagliflozin": 0.243941374494096
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00312253243967495,
                "Parameter2": 0,
                "Dapagliflozin": -0.771706762021987
            },
            "Weibull": {
                "Parameter1": 1.95637354550768,
                "Parameter2": 94.1576337752357,
                "Dapagliflozin": 0.400917832907162
            },
            "Gompertz": {
                "Parameter1": 0.0760672520237203,
                "Parameter2": 0.000940140958494224,
                "Dapagliflozin": -0.788699461893046
            },
            "Lognormal": {
                "Parameter1": 5.08656971693651,
                "Parameter2": 1.28122455467114,
                "Dapagliflozin": 0.454465809434655
            },
            "Log-logistic": {
                "Parameter1": 1.99828294506502,
                "Parameter2": 89.6868819298724,
                "Dapagliflozin": 0.404453242176391
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00111449965637304,
                "Parameter2": 0,
                "Dapagliflozin": -0.274443306981682
            },
            "Weibull": {
                "Parameter1": 1.17162110163057,
                "Parameter2": 536.931577977193,
                "Dapagliflozin": 0.236245955936798
            },
            "Gompertz": {
                "Parameter1": 0.0014395613085799,
                "Parameter2": 0.0010929465372112,
                "Dapagliflozin": -0.275779814711119
            },
            "Lognormal": {
                "Parameter1": 7.39856253025983,
                "Parameter2": 2.17529995311681,
                "Dapagliflozin": 0.236983744014872
            },
            "Log-logistic": {
                "Parameter1": 1.1810591184846,
                "Parameter2": 516.638715584259,
                "Dapagliflozin": 0.238864511116883
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000171461485595827,
                "Parameter2": 0,
                "Dapagliflozin": -19.5120234756674
            },
            "Weibull": {
                "Parameter1": 2.37468872465511,
                "Parameter2": 263.526240497646,
                "Dapagliflozin": 6.3524923597536
            },
            "Gompertz": {
                "Parameter1": 0.0944640771365648,
                "Parameter2": 0.0000338670437759179,
                "Dapagliflozin": -8.7295223294724
            },
            "Lognormal": {
                "Parameter1": 6.7917579370212,
                "Parameter2": 1.33966246679731,
                "Dapagliflozin": 3.45925703390697
            },
            "Log-logistic": {
                "Parameter1": 2.377889105,
                "Parameter2": 262.4650687,
                "Dapagliflozin": 7.152228894
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00355417190722593,
                "Parameter2": 0,
                "Dapagliflozin": -0.391535520684699
            },
            "Weibull": {
                "Parameter1": 1.5304754019735,
                "Parameter2": 125.270364598706,
                "Dapagliflozin": 0.260431762945451
            },
            "Gompertz": {
                "Parameter1": 0.0419098491215816,
                "Parameter2": 0.00187582551104684,
                "Dapagliflozin": -0.400499846179806
            },
            "Lognormal": {
                "Parameter1": 5.29081961626699,
                "Parameter2": 1.48918704257644,
                "Dapagliflozin": 0.272050655433127
            },
            "Log-logistic": {
                "Parameter1": 1.5668152988237,
                "Parameter2": 116.946255786571,
                "Dapagliflozin": 0.266184916607268
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00179685002750125,
                "Parameter2": 0,
                "Dapagliflozin": -0.517229057884494
            },
            "Weibull": {
                "Parameter1": 1.31173463358495,
                "Parameter2": 270.743484202021,
                "Dapagliflozin": 0.398028660078111
            },
            "Gompertz": {
                "Parameter1": 0.0349724618844156,
                "Parameter2": 0.00106569129690426,
                "Dapagliflozin": -0.522600296095652
            },
            "Lognormal": {
                "Parameter1": 6.51095921399805,
                "Parameter2": 1.94870613420336,
                "Dapagliflozin": 0.550383532397765
            },
            "Log-logistic": {
                "Parameter1": 1.32589424157512,
                "Parameter2": 258.336805948869,
                "Dapagliflozin": 0.409620879241228
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000870804759521802,
                "Parameter2": 0,
                "Dapagliflozin": 0.25133480100763
            },
            "Weibull": {
                "Parameter1": 0.978544843654572,
                "Parameter2": 1247.10480748722,
                "Dapagliflozin": -0.257068101341919
            },
            "Gompertz": {
                "Parameter1": -0.000357227908616454,
                "Parameter2": 0.000875437704245,
                "Dapagliflozin": 0.251677324277079
            },
            "Lognormal": {
                "Parameter1": 8.73257772214991,
                "Parameter2": 2.74786328137243,
                "Dapagliflozin": -0.229732507130479
            },
            "Log-logistic": {
                "Parameter1": 0.984978425538932,
                "Parameter2": 1200.89664270568,
                "Dapagliflozin": -0.25711212124462
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.00117654743412634,
                "Parameter2": 0,
                "Dapagliflozin": 0.027297881836463
            },
            "Weibull": {
                "Parameter1": 0.919001109369615,
                "Parameter2": 1153.40699726048,
                "Dapagliflozin": -0.0306103248252776
            },
            "Gompertz": {
                "Parameter1": -0.00398435265015348,
                "Parameter2": 0.00124178072579622,
                "Dapagliflozin": 0.0274769325358833
            },
            "Lognormal": {
                "Parameter1": 8.74763252931884,
                "Parameter2": 2.91516678449245,
                "Dapagliflozin": -0.0667025795401026
            },
            "Log-logistic": {
                "Parameter1": 0.926185417948306,
                "Parameter2": 1102.17630468876,
                "Dapagliflozin": -0.0324620916225748
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00205708761904488,
                "Parameter2": 0,
                "Dapagliflozin": -0.501540602754528
            },
            "Weibull": {
                "Parameter1": 1.1455832983206,
                "Parameter2": 336.300252999658,
                "Dapagliflozin": 0.439434101830829
            },
            "Gompertz": {
                "Parameter1": 0.038418780274596,
                "Parameter2": 0.00115372825574683,
                "Dapagliflozin": -0.50796867681508
            },
            "Lognormal": {
                "Parameter1": 7.11506280017896,
                "Parameter2": 2.37575757906627,
                "Dapagliflozin": 0.575963321919676
            },
            "Log-logistic": {
                "Parameter1": 1.15722648788026,
                "Parameter2": 320.492338533439,
                "Dapagliflozin": 0.446590355464937
            }
        }
    },
    "Aged < 65 years": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.0044452253761213,
                "Parameter2": 0,
                "Dapagliflozin": -0.381441106931694
            },
            "Weibull": {
                "Parameter1": 1.71431105210945,
                "Parameter2": 92.2506255384631,
                "Dapagliflozin": 0.225260778702181
            },
            "Gompertz": {
                "Parameter1": 0.0618399037877646,
                "Parameter2": 0.00169241863794944,
                "Dapagliflozin": -0.385867220536256
            },
            "Lognormal": {
                "Parameter1": 5.01243543539095,
                "Parameter2": 1.40606739095448,
                "Dapagliflozin": 0.255769175138628
            },
            "Log-logistic": {
                "Parameter1": 1.76424977154308,
                "Parameter2": 86.1524381686937,
                "Dapagliflozin": 0.22695625615071
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00473322317343446,
                "Parameter2": 0,
                "Dapagliflozin": -0.53486812949941
            },
            "Weibull": {
                "Parameter1": 1.77195731263125,
                "Parameter2": 85.3397676710963,
                "Dapagliflozin": 0.306223087964696
            },
            "Gompertz": {
                "Parameter1": 0.0595425767340694,
                "Parameter2": 0.00188738828414423,
                "Dapagliflozin": -0.542163634386944
            },
            "Lognormal": {
                "Parameter1": 4.78439354193965,
                "Parameter2": 1.2731640545926,
                "Dapagliflozin": 0.357040747950488
            },
            "Log-logistic": {
                "Parameter1": 1.82880831561135,
                "Parameter2": 79.3672092336152,
                "Dapagliflozin": 0.310148766346473
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000761679344299482,
                "Parameter2": 0,
                "Dapagliflozin": -0.139017504359281
            },
            "Weibull": {
                "Parameter1": 1.02009759223183,
                "Parameter2": 1216.4327488455,
                "Dapagliflozin": 0.136255779200555
            },
            "Gompertz": {
                "Parameter1": 0.0120929142984984,
                "Parameter2": 0.00063993450921976,
                "Dapagliflozin": -0.139762806081137
            },
            "Lognormal": {
                "Parameter1": 8.92544163792512,
                "Parameter2": 2.75178311862386,
                "Dapagliflozin": 0.1549064258564
            },
            "Log-logistic": {
                "Parameter1": 1.02470748041004,
                "Parameter2": 1185.9530306527,
                "Dapagliflozin": 0.134611688017739
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.0000634732786620328,
                "Parameter2": 0,
                "Dapagliflozin": -0.00548611497815574
            },
            "Weibull": {
                "Parameter1": 2.24555165812714,
                "Parameter2": 470.307672439959,
                "Dapagliflozin": 0.00133360547448327
            },
            "Gompertz": {
                "Parameter1": 0.102002701024023,
                "Parameter2": 0.0000104153846642538,
                "Dapagliflozin": 0.00393580317578085
            },
            "Lognormal": {
                "Parameter1": 7.97832345562357,
                "Parameter2": 1.60763079486124,
                "Dapagliflozin": 0.0836992409471798
            },
            "Log-logistic": {
                "Parameter1": 2.24674281702304,
                "Parameter2": 469.07007740902,
                "Dapagliflozin": 0.0026824292852524
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00199940827785395,
                "Parameter2": 0,
                "Dapagliflozin": -0.364836583510659
            },
            "Weibull": {
                "Parameter1": 1.22531561216258,
                "Parameter2": 293.328463078388,
                "Dapagliflozin": 0.297570709353478
            },
            "Gompertz": {
                "Parameter1": 0.0297179801151494,
                "Parameter2": 0.00127731150661061,
                "Dapagliflozin": -0.363341856937999
            },
            "Lognormal": {
                "Parameter1": 6.63832004361667,
                "Parameter2": 2.06152328915664,
                "Dapagliflozin": 0.344323822482424
            },
            "Log-logistic": {
                "Parameter1": 1.23828404479752,
                "Parameter2": 280.364634363232,
                "Dapagliflozin": 0.29937690292352
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.000969454164791018,
                "Parameter2": 0,
                "Dapagliflozin": -0.933186231835853
            },
            "Weibull": {
                "Parameter1": 1.01489551766414,
                "Parameter2": 977.817887644857,
                "Dapagliflozin": 0.919555298459418
            },
            "Gompertz": {
                "Parameter1": -0.00603690579383458,
                "Parameter2": 0.00105288352469732,
                "Dapagliflozin": -0.933237407762104
            },
            "Lognormal": {
                "Parameter1": 8.38851597655777,
                "Parameter2": 2.63191038734369,
                "Dapagliflozin": 1.04255840303483
            },
            "Log-logistic": {
                "Parameter1": 1.02074811535517,
                "Parameter2": 943.618962272199,
                "Dapagliflozin": 0.925043755106003
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000544039966270706,
                "Parameter2": 0,
                "Dapagliflozin": -0.19948401945295
            },
            "Weibull": {
                "Parameter1": 0.997330223770574,
                "Parameter2": 1858.96215608939,
                "Dapagliflozin": 0.200019418553709
            },
            "Gompertz": {
                "Parameter1": 0.0065672775077258,
                "Parameter2": 0.000495962786496447,
                "Dapagliflozin": -0.200650536616446
            },
            "Lognormal": {
                "Parameter1": 9.72319704156782,
                "Parameter2": 2.93360981562369,
                "Dapagliflozin": 0.162809609615918
            },
            "Log-logistic": {
                "Parameter1": 1.00095305881996,
                "Parameter2": 1819.82665604456,
                "Dapagliflozin": 0.19789788368064
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000513222595283415,
                "Parameter2": 0,
                "Dapagliflozin": -0.0716979475066667
            },
            "Weibull": {
                "Parameter1": 0.839991873428147,
                "Parameter2": 4404.28095009906,
                "Dapagliflozin": 0.0852624091687566
            },
            "Gompertz": {
                "Parameter1": -0.0120841738740716,
                "Parameter2": 0.000603635122354006,
                "Dapagliflozin": -0.0729343547650073
            },
            "Lognormal": {
                "Parameter1": 10.9306417285327,
                "Parameter2": 3.4640721710322,
                "Dapagliflozin": 0.0958033588624015
            },
            "Log-logistic": {
                "Parameter1": 0.84259790757296,
                "Parameter2": 4298.60115736214,
                "Dapagliflozin": 0.0869917602121016
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00143037642103106,
                "Parameter2": 0,
                "Dapagliflozin": -0.272479483027595
            },
            "Weibull": {
                "Parameter1": 1.02353712057132,
                "Parameter2": 648.700469640117,
                "Dapagliflozin": 0.266230655681277
            },
            "Gompertz": {
                "Parameter1": 0.012202560482388,
                "Parameter2": 0.00120178152589317,
                "Dapagliflozin": -0.272242770896825
            },
            "Lognormal": {
                "Parameter1": 7.86299096460389,
                "Parameter2": 2.59208623030017,
                "Dapagliflozin": 0.394352397932283
            },
            "Log-logistic": {
                "Parameter1": 1.0319998140926,
                "Parameter2": 619.691706737795,
                "Dapagliflozin": 0.271619947683895
            }
        }
    },
    "T2DM": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00393949104735758,
                "Parameter2": 0,
                "Dapagliflozin": -0.339338997163994
            },
            "Weibull": {
                "Parameter1": 1.77230185294587,
                "Parameter2": 94.8921375178339,
                "Dapagliflozin": 0.193367788742836
            },
            "Gompertz": {
                "Parameter1": 0.0687586368944582,
                "Parameter2": 0.00132578418030315,
                "Dapagliflozin": -0.342974306058167
            },
            "Lognormal": {
                "Parameter1": 5.09775208279936,
                "Parameter2": 1.39639188245875,
                "Dapagliflozin": 0.208282930670693
            },
            "Log-logistic": {
                "Parameter1": 1.81590926120878,
                "Parameter2": 89.517148205439,
                "Dapagliflozin": 0.194845437852188
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00411104475768836,
                "Parameter2": 0,
                "Dapagliflozin": -0.597060893142834
            },
            "Weibull": {
                "Parameter1": 1.97038497493068,
                "Parameter2": 81.6975380822201,
                "Dapagliflozin": 0.306973188857701
            },
            "Gompertz": {
                "Parameter1": 0.0721009134056668,
                "Parameter2": 0.00130931892976619,
                "Dapagliflozin": -0.605926693921157
            },
            "Lognormal": {
                "Parameter1": 4.77710317350637,
                "Parameter2": 1.18497812570047,
                "Dapagliflozin": 0.352929984908976
            },
            "Log-logistic": {
                "Parameter1": 2.02794983305228,
                "Parameter2": 76.8525486112713,
                "Dapagliflozin": 0.310595284857311
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00108413547159671,
                "Parameter2": 0,
                "Dapagliflozin": -0.168598381374255
            },
            "Weibull": {
                "Parameter1": 1.12919262891908,
                "Parameter2": 617.122554007275,
                "Dapagliflozin": 0.149811486105821
            },
            "Gompertz": {
                "Parameter1": 0.0109033181054437,
                "Parameter2": 0.000927277172213184,
                "Dapagliflozin": -0.169994642791035
            },
            "Lognormal": {
                "Parameter1": 7.72986240110759,
                "Parameter2": 2.34043621887899,
                "Dapagliflozin": 0.17935278744442
            },
            "Log-logistic": {
                "Parameter1": 1.13723265830217,
                "Parameter2": 595.872073295183,
                "Dapagliflozin": 0.14951240107495
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000105769314302096,
                "Parameter2": 0,
                "Dapagliflozin": -0.703521556722758
            },
            "Weibull": {
                "Parameter1": 2.61846413366025,
                "Parameter2": 260.414428896319,
                "Dapagliflozin": 0.269341266501523
            },
            "Gompertz": {
                "Parameter1": 0.120044564893023,
                "Parameter2": 0.0000116669499865572,
                "Dapagliflozin": -0.708194578268869
            },
            "Lognormal": {
                "Parameter1": 7.02418939202466,
                "Parameter2": 1.3465511506644,
                "Dapagliflozin": 0.350885364626746
            },
            "Log-logistic": {
                "Parameter1": 2.61873275596568,
                "Parameter2": 260.140210666674,
                "Dapagliflozin": 0.270271461409935
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00298608940633113,
                "Parameter2": 0,
                "Dapagliflozin": -0.309351256379183
            },
            "Weibull": {
                "Parameter1": 1.42075204338892,
                "Parameter2": 160.130554142098,
                "Dapagliflozin": 0.218559323511188
            },
            "Gompertz": {
                "Parameter1": 0.0408976538824337,
                "Parameter2": 0.00158064694941658,
                "Dapagliflozin": -0.310221126517318
            },
            "Lognormal": {
                "Parameter1": 5.67929514936732,
                "Parameter2": 1.67218801447218,
                "Dapagliflozin": 0.25611210126838
            },
            "Log-logistic": {
                "Parameter1": 1.44605951910197,
                "Parameter2": 151.042446064686,
                "Dapagliflozin": 0.221341885594807
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00173573829913685,
                "Parameter2": 0,
                "Dapagliflozin": -0.751085853461522
            },
            "Weibull": {
                "Parameter1": 1.16060339642957,
                "Parameter2": 377.673851062659,
                "Dapagliflozin": 0.648334416904064
            },
            "Gompertz": {
                "Parameter1": 0.0192421738256344,
                "Parameter2": 0.00131022181377528,
                "Dapagliflozin": -0.750915327839427
            },
            "Lognormal": {
                "Parameter1": 6.95505701047756,
                "Parameter2": 2.19073508385435,
                "Dapagliflozin": 0.815175410207259
            },
            "Log-logistic": {
                "Parameter1": 1.17252519609106,
                "Parameter2": 358.937865745331,
                "Dapagliflozin": 0.660190074776676
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000857883722430805,
                "Parameter2": 0,
                "Dapagliflozin": 0.0507942243019345
            },
            "Weibull": {
                "Parameter1": 1.05263558501306,
                "Parameter2": 966.114302098631,
                "Dapagliflozin": -0.0481998199235025
            },
            "Gompertz": {
                "Parameter1": 0.0114917188112875,
                "Parameter2": 0.000727268674476106,
                "Dapagliflozin": 0.0498571959786296
            },
            "Lognormal": {
                "Parameter1": 8.52068151691248,
                "Parameter2": 2.62325299785591,
                "Dapagliflozin": -0.0270678531855077
            },
            "Log-logistic": {
                "Parameter1": 1.0588561473739,
                "Parameter2": 936.568175146208,
                "Dapagliflozin": -0.0497629341012733
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000940145313542891,
                "Parameter2": 0,
                "Dapagliflozin": 0.0453079478960786
            },
            "Weibull": {
                "Parameter1": 0.838911634646336,
                "Parameter2": 2152.40909643922,
                "Dapagliflozin": -0.0543450667946441
            },
            "Gompertz": {
                "Parameter1": -0.0148423305145889,
                "Parameter2": 0.00114716621019575,
                "Dapagliflozin": 0.0454115086161478
            },
            "Lognormal": {
                "Parameter1": 9.63573731369754,
                "Parameter2": 3.23847487389765,
                "Dapagliflozin": -0.0538549726307086
            },
            "Log-logistic": {
                "Parameter1": 0.844137429356211,
                "Parameter2": 2060.70920969283,
                "Dapagliflozin": -0.0522717813911519
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00189578467356245,
                "Parameter2": 0,
                "Dapagliflozin": -0.416648292983575
            },
            "Weibull": {
                "Parameter1": 1.1270034159,
                "Parameter2": 377.724316767509,
                "Dapagliflozin": 0.36998904785454
            },
            "Gompertz": {
                "Parameter1": 0.0315707952984192,
                "Parameter2": 0.00117918779213088,
                "Dapagliflozin": -0.417335024867032
            },
            "Lognormal": {
                "Parameter1": 7.18837137721666,
                "Parameter2": 2.37739877978843,
                "Dapagliflozin": 0.518040690857271
            },
            "Log-logistic": {
                "Parameter1": 1.13799923262291,
                "Parameter2": 360.278779478756,
                "Dapagliflozin": 0.375910941477376
            }
        }
    },
    "No T2DM": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00375800700200836,
                "Parameter2": 0,
                "Dapagliflozin": -0.472728112736466
            },
            "Weibull": {
                "Parameter1": 1.42023481852483,
                "Parameter2": 133.178750959722,
                "Dapagliflozin": 0.337742130779043
            },
            "Gompertz": {
                "Parameter1": 0.0398010710019607,
                "Parameter2": 0.00211048812244559,
                "Dapagliflozin": -0.481727043413438
            },
            "Lognormal": {
                "Parameter1": 5.47934126192384,
                "Parameter2": 1.66927606120842,
                "Dapagliflozin": 0.362427464311264
            },
            "Log-logistic": {
                "Parameter1": 1.45266789966392,
                "Parameter2": 124.187874141548,
                "Dapagliflozin": 0.340310750003969
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00390928490366292,
                "Parameter2": 0,
                "Dapagliflozin": -0.625732298771909
            },
            "Weibull": {
                "Parameter1": 1.56729482963821,
                "Parameter2": 111.333054220383,
                "Dapagliflozin": 0.406218436206657
            },
            "Gompertz": {
                "Parameter1": 0.0487134407417077,
                "Parameter2": 0.0019043860025444,
                "Dapagliflozin": -0.637744820446282
            },
            "Lognormal": {
                "Parameter1": 5.20262724968674,
                "Parameter2": 1.49436457685013,
                "Dapagliflozin": 0.460340628136485
            },
            "Log-logistic": {
                "Parameter1": 1.6051041182485,
                "Parameter2": 104.041535656904,
                "Dapagliflozin": 0.412277316805438
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000528788893671817,
                "Parameter2": 0,
                "Dapagliflozin": -0.409127942907446
            },
            "Weibull": {
                "Parameter1": 0.908804784921619,
                "Parameter2": 2904.43737521291,
                "Dapagliflozin": 0.449074756217233
            },
            "Gompertz": {
                "Parameter1": -0.0223253665865434,
                "Parameter2": 0.000703593064339125,
                "Dapagliflozin": -0.408836774762695
            },
            "Lognormal": {
                "Parameter1": 10.2084907912954,
                "Parameter2": 3.13391912101774,
                "Dapagliflozin": 0.383977241868808
            },
            "Log-logistic": {
                "Parameter1": 0.912329250087412,
                "Parameter2": 2831.28856422728,
                "Dapagliflozin": 0.448018211343158
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.00011750864303818,
                "Parameter2": 0,
                "Dapagliflozin": -19.9666776205329
            },
            "Weibull": {
                "Parameter1": 1.66845827767074,
                "Parameter2": 848.166611251173,
                "Dapagliflozin": 12.7493556273818
            },
            "Gompertz": {
                "Parameter1": 0.0376005372297665,
                "Parameter2": 0.0000672543056532798,
                "Dapagliflozin": -9.01749487215185
            },
            "Lognormal": {
                "Parameter1": 8.384016056,
                "Parameter2": 1.861988643,
                "Dapagliflozin": 2.589593782
            },
            "Log-logistic": {
                "Parameter1": 1.67007925361292,
                "Parameter2": 844.532527736148,
                "Dapagliflozin": 6.58918584832447
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00193889261012997,
                "Parameter2": 0,
                "Dapagliflozin": -0.667403151181663
            },
            "Weibull": {
                "Parameter1": 1.21822931744856,
                "Parameter2": 303.234881591978,
                "Dapagliflozin": 0.549774097029553
            },
            "Gompertz": {
                "Parameter1": 0.0146725990385038,
                "Parameter2": 0.00157626272694011,
                "Dapagliflozin": -0.667804604871964
            },
            "Lognormal": {
                "Parameter1": 6.68677428496885,
                "Parameter2": 2.05941662257971,
                "Dapagliflozin": 0.546266305581626
            },
            "Log-logistic": {
                "Parameter1": 1.23349188881143,
                "Parameter2": 287.49075104347,
                "Dapagliflozin": 0.554967472691041
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.000414420924258245,
                "Parameter2": 0,
                "Dapagliflozin": -0.158217316017335
            },
            "Weibull": {
                "Parameter1": 1.22937046019108,
                "Parameter2": 1040.05804832304,
                "Dapagliflozin": 0.130368255708905
            },
            "Gompertz": {
                "Parameter1": 0.00550000319697758,
                "Parameter2": 0.000384180773623061,
                "Dapagliflozin": -0.156897245480754
            },
            "Lognormal": {
                "Parameter1": 8.48777772906834,
                "Parameter2": 2.28802459911509,
                "Dapagliflozin": 0.194394479087759
            },
            "Log-logistic": {
                "Parameter1": 1.23318945497857,
                "Parameter2": 1022.48406029557,
                "Dapagliflozin": 0.132240693308457
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000295615326880427,
                "Parameter2": 0,
                "Dapagliflozin": 0.179183614062031
            },
            "Weibull": {
                "Parameter1": 0.695585807454156,
                "Parameter2": 28514.5993259112,
                "Dapagliflozin": -0.262197875671881
            },
            "Gompertz": {
                "Parameter1": -0.0709664348410733,
                "Parameter2": 0.000655226898372923,
                "Dapagliflozin": 0.186354273138021
            },
            "Lognormal": {
                "Parameter1": 13.3537774106685,
                "Parameter2": 4.14972299444045,
                "Dapagliflozin": -0.357619321300717
            },
            "Log-logistic": {
                "Parameter1": 0.697418652932522,
                "Parameter2": 27840.680671322,
                "Dapagliflozin": -0.263871155574647
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000473491293399404,
                "Parameter2": 0,
                "Dapagliflozin": -0.290582977719005
            },
            "Weibull": {
                "Parameter1": 1.20510814122668,
                "Parameter2": 1002.32172291736,
                "Dapagliflozin": 0.242953894275835
            },
            "Gompertz": {
                "Parameter1": 0.0272772375584435,
                "Parameter2": 0.000318867865718987,
                "Dapagliflozin": -0.293407320090803
            },
            "Lognormal": {
                "Parameter1": 8.89640127881385,
                "Parameter2": 2.48450143666995,
                "Dapagliflozin": 0.162922932232011
            },
            "Log-logistic": {
                "Parameter1": 1.20842952565377,
                "Parameter2": 987.587558602905,
                "Dapagliflozin": 0.243055441458909
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00125861970510921,
                "Parameter2": 0,
                "Dapagliflozin": -0.284029263895763
            },
            "Weibull": {
                "Parameter1": 0.94638086068133,
                "Parameter2": 964.214116455693,
                "Dapagliflozin": 0.299360643337355
            },
            "Gompertz": {
                "Parameter1": 0.00174833795693594,
                "Parameter2": 0.00122940769548681,
                "Dapagliflozin": -0.28351259524634
            },
            "Lognormal": {
                "Parameter1": 8.48258348809448,
                "Parameter2": 2.83487949067395,
                "Dapagliflozin": 0.382414545472305
            },
            "Log-logistic": {
                "Parameter1": 0.953488636443204,
                "Parameter2": 921.812316447548,
                "Dapagliflozin": 0.30358707132355
            }
        }
    },
    "CV Disease": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00359025210782087,
                "Parameter2": 0,
                "Dapagliflozin": -0.357196125897427
            },
            "Weibull": {
                "Parameter1": 1.7739601092258,
                "Parameter2": 99.5079294150433,
                "Dapagliflozin": 0.209050392134991
            },
            "Gompertz": {
                "Parameter1": 0.0660927072880247,
                "Parameter2": 0.00128103669905619,
                "Dapagliflozin": -0.375494049004457
            },
            "Lognormal": {
                "Parameter1": 5.10047688782818,
                "Parameter2": 1.35413255103876,
                "Dapagliflozin": 0.215964543650259
            },
            "Log-logistic": {
                "Parameter1": 1.81560176837795,
                "Parameter2": 94.0448634982185,
                "Dapagliflozin": 0.210420115885654
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00392111140854263,
                "Parameter2": 0,
                "Dapagliflozin": -0.608350978459993
            },
            "Weibull": {
                "Parameter1": 1.64150581653987,
                "Parameter2": 104.653358845795,
                "Dapagliflozin": 0.378317906050692
            },
            "Gompertz": {
                "Parameter1": 0.0587234954116203,
                "Parameter2": 0.00160046543738201,
                "Dapagliflozin": -0.626516500386542
            },
            "Lognormal": {
                "Parameter1": 5.19590366496301,
                "Parameter2": 1.48440306230819,
                "Dapagliflozin": 0.449006036010129
            },
            "Log-logistic": {
                "Parameter1": 1.68089344500025,
                "Parameter2": 98.3298852444198,
                "Dapagliflozin": 0.381223128271102
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00181074445593579,
                "Parameter2": 0,
                "Dapagliflozin": -0.368318528983729
            },
            "Weibull": {
                "Parameter1": 1.10387324678921,
                "Parameter2": 416.007216406448,
                "Dapagliflozin": 0.33475431333502
            },
            "Gompertz": {
                "Parameter1": 0.0113638321933522,
                "Parameter2": 0.00153960220276109,
                "Dapagliflozin": -0.370410153191015
            },
            "Lognormal": {
                "Parameter1": 7.07921872916858,
                "Parameter2": 2.27298801189395,
                "Dapagliflozin": 0.389743792095439
            },
            "Log-logistic": {
                "Parameter1": 1.11582356991055,
                "Parameter2": 395.072914406472,
                "Dapagliflozin": 0.338133417817194
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000185717380095978,
                "Parameter2": 0,
                "Dapagliflozin": -1.42325575414301
            },
            "Weibull": {
                "Parameter1": 3.45445986390679,
                "Parameter2": 129.525057699463,
                "Dapagliflozin": 0.417163501764382
            },
            "Gompertz": {
                "Parameter1": 0.145544408424072,
                "Parameter2": 0.0000116614145334324,
                "Dapagliflozin": -1.43196785748369
            },
            "Lognormal": {
                "Parameter1": 5.7785304684053,
                "Parameter2": 0.955760863433243,
                "Dapagliflozin": 0.475476515144159
            },
            "Log-logistic": {
                "Parameter1": 3.46045817581272,
                "Parameter2": 129.092060661598,
                "Dapagliflozin": 0.417142564938168
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00445669365798155,
                "Parameter2": 0,
                "Dapagliflozin": -0.368914167730604
            },
            "Weibull": {
                "Parameter1": 1.35293013521132,
                "Parameter2": 129.6188265583,
                "Dapagliflozin": 0.275609127237399
            },
            "Gompertz": {
                "Parameter1": 0.0361471235522224,
                "Parameter2": 0.00257101211875157,
                "Dapagliflozin": -0.373195191808804
            },
            "Lognormal": {
                "Parameter1": 5.31773365264702,
                "Parameter2": 1.66664671478156,
                "Dapagliflozin": 0.320319555069913
            },
            "Log-logistic": {
                "Parameter1": 1.38881991254043,
                "Parameter2": 119.163713752951,
                "Dapagliflozin": 0.282441154989894
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.0027883866647081,
                "Parameter2": 0,
                "Dapagliflozin": -0.619582820154014
            },
            "Weibull": {
                "Parameter1": 1.15803746748919,
                "Parameter2": 251.75412626618,
                "Dapagliflozin": 0.537234075034435
            },
            "Gompertz": {
                "Parameter1": 0.0168969195418906,
                "Parameter2": 0.00218924249212171,
                "Dapagliflozin": -0.62198356485952
            },
            "Lognormal": {
                "Parameter1": 6.246917074484,
                "Parameter2": 2.05298006565483,
                "Dapagliflozin": 0.703143386583102
            },
            "Log-logistic": {
                "Parameter1": 1.17753469613512,
                "Parameter2": 233.564457007227,
                "Dapagliflozin": 0.553738955496406
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.00117812243570895,
                "Parameter2": 0,
                "Dapagliflozin": 0.00499304972773795
            },
            "Weibull": {
                "Parameter1": 0.990421909416641,
                "Parameter2": 877.612033370735,
                "Dapagliflozin": -0.00512889563914359
            },
            "Gompertz": {
                "Parameter1": 0.00510792240491638,
                "Parameter2": 0.00109628742032632,
                "Dapagliflozin": 0.00455439249690086
            },
            "Lognormal": {
                "Parameter1": 8.24161795581002,
                "Parameter2": 2.65767542890233,
                "Dapagliflozin": -0.00278967867904932
            },
            "Log-logistic": {
                "Parameter1": 0.997949663440461,
                "Parameter2": 842.84292446983,
                "Dapagliflozin": -0.00816681308495364
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.00137199837104945,
                "Parameter2": 0,
                "Dapagliflozin": 0.064754598036913
            },
            "Weibull": {
                "Parameter1": 0.837481193014888,
                "Parameter2": 1384.31404208162,
                "Dapagliflozin": -0.0790571542621134
            },
            "Gompertz": {
                "Parameter1": -0.0152534873230328,
                "Parameter2": 0.00168009414373017,
                "Dapagliflozin": 0.0647765843900808
            },
            "Lognormal": {
                "Parameter1": 8.85467093257136,
                "Parameter2": 3.09612242338179,
                "Dapagliflozin": -0.0868015288337284
            },
            "Log-logistic": {
                "Parameter1": 0.845558989728518,
                "Parameter2": 1302.38328397668,
                "Dapagliflozin": -0.077041646142032
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00253215446704732,
                "Parameter2": 0,
                "Dapagliflozin": -0.493785281792124
            },
            "Weibull": {
                "Parameter1": 0.977807027080664,
                "Parameter2": 419.77689695855,
                "Dapagliflozin": 0.50473329761697
            },
            "Gompertz": {
                "Parameter1": 0.0227467294805489,
                "Parameter2": 0.00181628442787836,
                "Dapagliflozin": -0.495711439031759
            },
            "Lognormal": {
                "Parameter1": 7.24934435554751,
                "Parameter2": 2.64534011025684,
                "Dapagliflozin": 0.721522357112098
            },
            "Log-logistic": {
                "Parameter1": 0.989513552709126,
                "Parameter2": 392.817887088251,
                "Dapagliflozin": 0.517460229589626
            }
        }
    },
    "No CV Disease": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00407386923791775,
                "Parameter2": 0,
                "Dapagliflozin": -0.387652827390515
            },
            "Weibull": {
                "Parameter1": 1.58854045812968,
                "Parameter2": 107.207371465855,
                "Dapagliflozin": 0.244566567610275
            },
            "Gompertz": {
                "Parameter1": 0.0566807725528758,
                "Parameter2": 0.00170819792389406,
                "Dapagliflozin": -0.3885117797796
            },
            "Lognormal": {
                "Parameter1": 5.25705949713774,
                "Parameter2": 1.54360502741915,
                "Dapagliflozin": 0.271578579760261
            },
            "Log-logistic": {
                "Parameter1": 1.62796639471912,
                "Parameter2": 100.497796117178,
                "Dapagliflozin": 0.244223805801313
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00413041575013416,
                "Parameter2": 0,
                "Dapagliflozin": -0.602606338527997
            },
            "Weibull": {
                "Parameter1": 1.96876514214879,
                "Parameter2": 81.377564195431,
                "Dapagliflozin": 0.308810245100947
            },
            "Gompertz": {
                "Parameter1": 0.0688768950094467,
                "Parameter2": 0.00139995509890223,
                "Dapagliflozin": -0.606218930361497
            },
            "Lognormal": {
                "Parameter1": 4.71298784438918,
                "Parameter2": 1.14178028569683,
                "Dapagliflozin": 0.342565964529234
            },
            "Log-logistic": {
                "Parameter1": 2.02631920993581,
                "Parameter2": 76.4294111587556,
                "Dapagliflozin": 0.314626580082372
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000330329597050753,
                "Parameter2": 0,
                "Dapagliflozin": 0.177745713743636
            },
            "Weibull": {
                "Parameter1": 1.04959229244134,
                "Parameter2": 2422.81953502226,
                "Dapagliflozin": -0.169322957360984
            },
            "Gompertz": {
                "Parameter1": -0.00775882776390036,
                "Parameter2": 0.000367471117023505,
                "Dapagliflozin": 0.177273859169227
            },
            "Lognormal": {
                "Parameter1": 9.84494420412045,
                "Parameter2": 2.75439231020531,
                "Dapagliflozin": -0.230753660287613
            },
            "Log-logistic": {
                "Parameter1": 1.05295799173831,
                "Parameter2": 2379.63745774541,
                "Dapagliflozin": -0.171802153216517
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.0000600599267342975,
                "Parameter2": 0,
                "Dapagliflozin": -0.682455539332648
            },
            "Weibull": {
                "Parameter1": 1.43767594618857,
                "Parameter2": 2366.8958234471,
                "Dapagliflozin": 0.474791938950622
            },
            "Gompertz": {
                "Parameter1": 0.0334771422039291,
                "Parameter2": 0.0000362988985236671,
                "Dapagliflozin": -0.690867367845014
            },
            "Lognormal": {
                "Parameter1": 10.2499338712746,
                "Parameter2": 2.37306606839861,
                "Dapagliflozin": 0.578131103982457
            },
            "Log-logistic": {
                "Parameter1": 1.43857724847337,
                "Parameter2": 2359.73636132402,
                "Dapagliflozin": 0.474454474444241
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00150053144078626,
                "Parameter2": 0,
                "Dapagliflozin": -0.437469213340991
            },
            "Weibull": {
                "Parameter1": 1.43019573265229,
                "Parameter2": 255.278812601473,
                "Dapagliflozin": 0.306228666262641
            },
            "Gompertz": {
                "Parameter1": 0.0360985021472173,
                "Parameter2": 0.000865952355484077,
                "Dapagliflozin": -0.436543765038151
            },
            "Lognormal": {
                "Parameter1": 6.45525791340359,
                "Parameter2": 1.794625872698,
                "Dapagliflozin": 0.316112743663012
            },
            "Log-logistic": {
                "Parameter1": 1.44361095628667,
                "Parameter2": 246.513556542093,
                "Dapagliflozin": 0.307077316869789
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.000394388777754853,
                "Parameter2": 0,
                "Dapagliflozin": -1.17430584309709
            },
            "Weibull": {
                "Parameter1": 1.29781656973803,
                "Parameter2": 895.562831621535,
                "Dapagliflozin": 0.905592442592092
            },
            "Gompertz": {
                "Parameter1": 0.0291860080279291,
                "Parameter2": 0.000255401885290223,
                "Dapagliflozin": -1.17961740424511
            },
            "Lognormal": {
                "Parameter1": 8.45016728824418,
                "Parameter2": 2.25124540759259,
                "Dapagliflozin": 1.03726555568385
            },
            "Log-logistic": {
                "Parameter1": 1.3013114266725,
                "Parameter2": 882.616433521216,
                "Dapagliflozin": 0.908012991118931
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000363694116572532,
                "Parameter2": 0,
                "Dapagliflozin": 0.163812068692049
            },
            "Weibull": {
                "Parameter1": 0.971318490299425,
                "Parameter2": 3152.01548270063,
                "Dapagliflozin": -0.168666638523802
            },
            "Gompertz": {
                "Parameter1": -0.00430719030895333,
                "Parameter2": 0.000385740302274622,
                "Dapagliflozin": 0.164905548153569
            },
            "Lognormal": {
                "Parameter1": 10.4610792536359,
                "Parameter2": 3.07185040169573,
                "Dapagliflozin": -0.176380726053186
            },
            "Log-logistic": {
                "Parameter1": 0.973793289021485,
                "Parameter2": 3097.12613621509,
                "Dapagliflozin": -0.170397779122464
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.00042440953665304,
                "Parameter2": 0,
                "Dapagliflozin": -0.23229956458552
            },
            "Weibull": {
                "Parameter1": 1.03306848148857,
                "Parameter2": 2042.10211058574,
                "Dapagliflozin": 0.224923084587948
            },
            "Gompertz": {
                "Parameter1": 0.0114934577816923,
                "Parameter2": 0.000360693375113168,
                "Dapagliflozin": -0.233190677849055
            },
            "Lognormal": {
                "Parameter1": 10.0036979814869,
                "Parameter2": 2.93495371224432,
                "Dapagliflozin": 0.200814807428022
            },
            "Log-logistic": {
                "Parameter1": 1.03561098581807,
                "Parameter2": 2010.13219568611,
                "Dapagliflozin": 0.225004560120236
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00116285558019925,
                "Parameter2": 0,
                "Dapagliflozin": -0.264614932396786
            },
            "Weibull": {
                "Parameter1": 1.24324723438689,
                "Parameter2": 436.974841060187,
                "Dapagliflozin": 0.213308530563937
            },
            "Gompertz": {
                "Parameter1": 0.0276409070076918,
                "Parameter2": 0.000772558717568442,
                "Dapagliflozin": -0.263364651945552
            },
            "Lognormal": {
                "Parameter1": 7.34020323456584,
                "Parameter2": 2.1672526268649,
                "Dapagliflozin": 0.249380808450036
            },
            "Log-logistic": {
                "Parameter1": 1.25181415356907,
                "Parameter2": 423.489344735697,
                "Dapagliflozin": 0.214616921065079
            }
        }
    },
    "eGFR ≥ 45 mL/min/1,73m2": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00169678196397607,
                "Parameter2": 0,
                "Dapagliflozin": -0.975853327927311
            },
            "Weibull": {
                "Parameter1": 1.51467384643762,
                "Parameter2": 207.350517263699,
                "Dapagliflozin": 0.646903183580739
            },
            "Gompertz": {
                "Parameter1": 0.0643272850555677,
                "Parameter2": 0.000599273742029485,
                "Dapagliflozin": -0.984621764232708
            },
            "Lognormal": {
                "Parameter1": 6.58898640761667,
                "Parameter2": 1.92173972473808,
                "Dapagliflozin": 0.751767440525626
            },
            "Log-logistic": {
                "Parameter1": 1.528120170161,
                "Parameter2": 201.177314076779,
                "Dapagliflozin": 0.646973726801074
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00308707344393451,
                "Parameter2": 0,
                "Dapagliflozin": -1.11777225610088
            },
            "Weibull": {
                "Parameter1": 1.75570138300395,
                "Parameter2": 111.373181371666,
                "Dapagliflozin": 0.643249253098532
            },
            "Gompertz": {
                "Parameter1": 0.0631479898745638,
                "Parameter2": 0.00112503027289783,
                "Dapagliflozin": -1.13283302277668
            },
            "Lognormal": {
                "Parameter1": 5.33304910074808,
                "Parameter2": 1.4422555602426,
                "Dapagliflozin": 0.739271986440351
            },
            "Log-logistic": {
                "Parameter1": 1.79239121675919,
                "Parameter2": 105.604849189083,
                "Dapagliflozin": 0.64612263979585
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000663155257309687,
                "Parameter2": 0,
                "Dapagliflozin": -0.254490145105389
            },
            "Weibull": {
                "Parameter1": 1.25557588205855,
                "Parameter2": 670.716485687433,
                "Dapagliflozin": 0.20298231162826
            },
            "Gompertz": {
                "Parameter1": 0.0310819121683274,
                "Parameter2": 0.000410159657828455,
                "Dapagliflozin": -0.25651380805623
            },
            "Lognormal": {
                "Parameter1": 8.10803832517552,
                "Parameter2": 2.28635588464693,
                "Dapagliflozin": 0.228142644221608
            },
            "Log-logistic": {
                "Parameter1": 1.2606076138345,
                "Parameter2": 657.853471934181,
                "Dapagliflozin": 0.202652403583449
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 1.34642135279694e-20,
                "Parameter2": 0,
                "Dapagliflozin": 0.916781977926697
            },
            "Weibull": {
                "Parameter1": 15.874010519682,
                "Parameter2": 615.08575782493,
                "Dapagliflozin": -0.414307206561479
            },
            "Gompertz": {
                "Parameter1": -80.9377774161659,
                "Parameter2": 4.82020932974273e-18,
                "Dapagliflozin": -4.80186498639014
            },
            "Lognormal": {
                "Parameter1": 25.52344251,
                "Parameter2": 0.323732965,
                "Dapagliflozin": 8.240109997
            },
            "Log-logistic": {
                "Parameter1": 15.87401052,
                "Parameter2": 615.0857578,
                "Dapagliflozin": -0.414307207
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00215525458625648,
                "Parameter2": 0,
                "Dapagliflozin": -0.395423070348659
            },
            "Weibull": {
                "Parameter1": 1.453974406,
                "Parameter2": 193.677439,
                "Dapagliflozin": 0.272823129
            },
            "Gompertz": {
                "Parameter1": 0.0436747461532675,
                "Parameter2": 0.00107420612589506,
                "Dapagliflozin": -0.396899348882379
            },
            "Lognormal": {
                "Parameter1": 6.04456226255057,
                "Parameter2": 1.71931027785701,
                "Dapagliflozin": 0.281831437372631
            },
            "Log-logistic": {
                "Parameter1": 1.47229330804938,
                "Parameter2": 185.61671891144,
                "Dapagliflozin": 0.272761716672953
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00126858507525723,
                "Parameter2": 0,
                "Dapagliflozin": -1.07963927222034
            },
            "Weibull": {
                "Parameter1": 1.03685385692562,
                "Parameter2": 699.911947081526,
                "Dapagliflozin": 1.04149541408518
            },
            "Gompertz": {
                "Parameter1": 0.00491202116968045,
                "Parameter2": 0.00118192379155676,
                "Dapagliflozin": -1.07988610269924
            },
            "Lognormal": {
                "Parameter1": 7.88538300747733,
                "Parameter2": 2.52434719035349,
                "Dapagliflozin": 1.18961505585388
            },
            "Log-logistic": {
                "Parameter1": 1.04465462539725,
                "Parameter2": 670.114360729411,
                "Dapagliflozin": 1.04971561770789
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000544067864194611,
                "Parameter2": 0,
                "Dapagliflozin": 0.362724254419431
            },
            "Weibull": {
                "Parameter1": 0.856402219504805,
                "Parameter2": 3712.23010457081,
                "Dapagliflozin": -0.423084378730057
            },
            "Gompertz": {
                "Parameter1": -0.0134939018795259,
                "Parameter2": 0.000654118750027061,
                "Dapagliflozin": 0.362336649438389
            },
            "Lognormal": {
                "Parameter1": 10.440948601323,
                "Parameter2": 3.29067982888731,
                "Dapagliflozin": -0.434050249546267
            },
            "Log-logistic": {
                "Parameter1": 0.860395669553994,
                "Parameter2": 3600.16281207923,
                "Dapagliflozin": -0.427035288960522
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000798332001244393,
                "Parameter2": 0,
                "Dapagliflozin": 0.0851310141177051
            },
            "Weibull": {
                "Parameter1": 0.888719479306378,
                "Parameter2": 2018.55183560304,
                "Dapagliflozin": -0.0958908053092361
            },
            "Gompertz": {
                "Parameter1": -0.00027695871268022,
                "Parameter2": 0.000801545239040678,
                "Dapagliflozin": 0.0848564214021816
            },
            "Lognormal": {
                "Parameter1": 9.75684044812716,
                "Parameter2": 3.17442009860323,
                "Dapagliflozin": -0.168931780097875
            },
            "Log-logistic": {
                "Parameter1": 0.893515069877283,
                "Parameter2": 1948.35521148812,
                "Dapagliflozin": -0.0968945394836555
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00140382599580713,
                "Parameter2": 0,
                "Dapagliflozin": -0.25395031768019
            },
            "Weibull": {
                "Parameter1": 0.86927184962716,
                "Parameter2": 1161.3842452254,
                "Dapagliflozin": 0.291943330660071
            },
            "Gompertz": {
                "Parameter1": -0.00351856476639202,
                "Parameter2": 0.00147384847060515,
                "Dapagliflozin": -0.253034720516843
            },
            "Lognormal": {
                "Parameter1": 8.60200030136539,
                "Parameter2": 3.00748726569146,
                "Dapagliflozin": 0.456311363607122
            },
            "Log-logistic": {
                "Parameter1": 0.876357837000674,
                "Parameter2": 1100.5828383718,
                "Dapagliflozin": 0.298688110342926
            }
        }
    },
    "eGFR < 45 mL/min/1,73m2": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00565773685759531,
                "Parameter2": 0,
                "Dapagliflozin": -0.298636112273924
            },
            "Weibull": {
                "Parameter1": 1.7379403605302,
                "Parameter2": 77.6692296055531,
                "Dapagliflozin": 0.176162117387578
            },
            "Gompertz": {
                "Parameter1": 0.065576362877269,
                "Parameter2": 0.00209673441777774,
                "Dapagliflozin": -0.306518332417367
            },
            "Lognormal": {
                "Parameter1": 4.71792812903953,
                "Parameter2": 1.31878454866538,
                "Dapagliflozin": 0.183308458919985
            },
            "Log-logistic": {
                "Parameter1": 1.79917865435237,
                "Parameter2": 71.8809147456706,
                "Dapagliflozin": 0.176991376235389
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.0048134087890581,
                "Parameter2": 0,
                "Dapagliflozin": -0.435479791644994
            },
            "Weibull": {
                "Parameter1": 1.89955391544076,
                "Parameter2": 77.1245363958592,
                "Dapagliflozin": 0.233809547673479
            },
            "Gompertz": {
                "Parameter1": 0.069644686879685,
                "Parameter2": 0.00166124356889838,
                "Dapagliflozin": -0.444030878176638
            },
            "Lognormal": {
                "Parameter1": 4.65668230121588,
                "Parameter2": 1.18328738441653,
                "Dapagliflozin": 0.268221432590226
            },
            "Log-logistic": {
                "Parameter1": 1.96140908702819,
                "Parameter2": 71.9863472208329,
                "Dapagliflozin": 0.238301083460131
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00110709169859208,
                "Parameter2": 0,
                "Dapagliflozin": -0.198788531795038
            },
            "Weibull": {
                "Parameter1": 1.04049740556645,
                "Parameter2": 787.305196241473,
                "Dapagliflozin": 0.19143457059514
            },
            "Gompertz": {
                "Parameter1": -0.00342493758130806,
                "Parameter2": 0.00115839710669662,
                "Dapagliflozin": -0.198302613863727
            },
            "Lognormal": {
                "Parameter1": 8.04040853998212,
                "Parameter2": 2.51095295670502,
                "Dapagliflozin": 0.199937219965034
            },
            "Log-logistic": {
                "Parameter1": 1.04828508656495,
                "Parameter2": 756.757183056699,
                "Dapagliflozin": 0.192145058001465
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000195369123280725,
                "Parameter2": 0,
                "Dapagliflozin": -1.13833612585121
            },
            "Weibull": {
                "Parameter1": 2.38839099226465,
                "Parameter2": 244.479511289525,
                "Dapagliflozin": 0.480057650469564
            },
            "Gompertz": {
                "Parameter1": 0.104320913538636,
                "Parameter2": 0.0000322885837599462,
                "Dapagliflozin": -1.14889986450801
            },
            "Lognormal": {
                "Parameter1": 6.77250285804196,
                "Parameter2": 1.36414439991606,
                "Dapagliflozin": 0.567885158569048
            },
            "Log-logistic": {
                "Parameter1": 2.39191720389093,
                "Parameter2": 243.378125719766,
                "Dapagliflozin": 0.48026770509535
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00305839450389751,
                "Parameter2": 0,
                "Dapagliflozin": -0.378693114257402
            },
            "Weibull": {
                "Parameter1": 1.35439215989024,
                "Parameter2": 169.798760347275,
                "Dapagliflozin": 0.281920758777803
            },
            "Gompertz": {
                "Parameter1": 0.0338357030323308,
                "Parameter2": 0.00185599949568288,
                "Dapagliflozin": -0.382165120397761
            },
            "Lognormal": {
                "Parameter1": 5.75817840708729,
                "Parameter2": 1.74687017633389,
                "Dapagliflozin": 0.325063013116368
            },
            "Log-logistic": {
                "Parameter1": 1.37940157094168,
                "Parameter2": 159.067352903689,
                "Dapagliflozin": 0.289055602600141
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00136146755661069,
                "Parameter2": 0,
                "Dapagliflozin": -0.466082019324206
            },
            "Weibull": {
                "Parameter1": 1.28150881937684,
                "Parameter2": 353.773762671363,
                "Dapagliflozin": 0.366120476322268
            },
            "Gompertz": {
                "Parameter1": 0.0282755085157838,
                "Parameter2": 0.000904028635646304,
                "Dapagliflozin": -0.467994641216675
            },
            "Lognormal": {
                "Parameter1": 6.9187553626627,
                "Parameter2": 2.03967076111982,
                "Dapagliflozin": 0.501030632676909
            },
            "Log-logistic": {
                "Parameter1": 1.29206477298994,
                "Parameter2": 340.326133677568,
                "Dapagliflozin": 0.374927818616492
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000791533571027302,
                "Parameter2": 0,
                "Dapagliflozin": -0.128882563352562
            },
            "Weibull": {
                "Parameter1": 1.09631949599623,
                "Parameter2": 899.144281661673,
                "Dapagliflozin": 0.118427344055594
            },
            "Gompertz": {
                "Parameter1": 0.0135069670974549,
                "Parameter2": 0.000656340291149935,
                "Dapagliflozin": -0.131453421124058
            },
            "Lognormal": {
                "Parameter1": 8.43452991255759,
                "Parameter2": 2.52873775015813,
                "Dapagliflozin": 0.120832284423272
            },
            "Log-logistic": {
                "Parameter1": 1.10155939360531,
                "Parameter2": 876.023219152558,
                "Dapagliflozin": 0.118149422630651
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000791440953902177,
                "Parameter2": 0,
                "Dapagliflozin": -0.082159453621671
            },
            "Weibull": {
                "Parameter1": 0.884285658669906,
                "Parameter2": 2099.04809887938,
                "Dapagliflozin": 0.0916888222949679
            },
            "Gompertz": {
                "Parameter1": -0.0142092774833963,
                "Parameter2": 0.000952973623085918,
                "Dapagliflozin": -0.080910110899967
            },
            "Lognormal": {
                "Parameter1": 9.63244083001114,
                "Parameter2": 3.1205382803249,
                "Dapagliflozin": 0.116594210972229
            },
            "Log-logistic": {
                "Parameter1": 0.889057069953931,
                "Parameter2": 2025.45835402696,
                "Dapagliflozin": 0.0931419889514057
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00192679620572721,
                "Parameter2": 0,
                "Dapagliflozin": -0.469431387225075
            },
            "Weibull": {
                "Parameter1": 1.26624528257076,
                "Parameter2": 277.421555778817,
                "Dapagliflozin": 0.372804092634252
            },
            "Gompertz": {
                "Parameter1": 0.0441070058176232,
                "Parameter2": 0.000992379730653,
                "Dapagliflozin": -0.472757676567207
            },
            "Lognormal": {
                "Parameter1": 6.84545267606872,
                "Parameter2": 2.16599693379678,
                "Dapagliflozin": 0.48245390563249
            },
            "Log-logistic": {
                "Parameter1": 1.27901487943441,
                "Parameter2": 265.832022349831,
                "Dapagliflozin": 0.378485828200477
            }
        }
    },
    "eGFR ≥ 50 mL/min/1,73m2": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00128181471605865,
                "Parameter2": 0,
                "Dapagliflozin": -0.650871827961299
            },
            "Weibull": {
                "Parameter1": 1.1650364036419,
                "Parameter2": 485.76931190076,
                "Dapagliflozin": 0.559419364383247
            },
            "Gompertz": {
                "Parameter1": 0.0465909793894149,
                "Parameter2": 0.000612728581677334,
                "Dapagliflozin": -0.655656330806594
            },
            "Lognormal": {
                "Parameter1": 7.9273506084942,
                "Parameter2": 2.52712214805927,
                "Dapagliflozin": 0.670560884661331
            },
            "Log-logistic": {
                "Parameter1": 1.1721056866919,
                "Parameter2": 471.888283491488,
                "Dapagliflozin": 0.560427610416881
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00245983890664847,
                "Parameter2": 0,
                "Dapagliflozin": -0.893486801890734
            },
            "Weibull": {
                "Parameter1": 1.902421094,
                "Parameter2": 113.8780613,
                "Dapagliflozin": 0.474796354
            },
            "Gompertz": {
                "Parameter1": 0.0628122095094285,
                "Parameter2": 0.000883479545622811,
                "Dapagliflozin": -0.907228442391707
            },
            "Lognormal": {
                "Parameter1": 5.30676837918873,
                "Parameter2": 1.31678289985869,
                "Dapagliflozin": 0.543164770388419
            },
            "Log-logistic": {
                "Parameter1": 1.93781538636231,
                "Parameter2": 108.800813632297,
                "Dapagliflozin": 0.477832458188693
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000626952952819589,
                "Parameter2": 0,
                "Dapagliflozin": 0.00161000333167945
            },
            "Weibull": {
                "Parameter1": 1.16017181517818,
                "Parameter2": 915.411747648748,
                "Dapagliflozin": -0.00106836906207909
            },
            "Gompertz": {
                "Parameter1": 0.0135384912102562,
                "Parameter2": 0.000512488287367891,
                "Dapagliflozin": -0.00228278460005784
            },
            "Lognormal": {
                "Parameter1": 8.39200814614021,
                "Parameter2": 2.4047988459457,
                "Dapagliflozin": 0.0276692771612105
            },
            "Log-logistic": {
                "Parameter1": 1.16559113233404,
                "Parameter2": 893.09285860866,
                "Dapagliflozin": -0.000015950791762212
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 1.31e-20,
                "Parameter2": 0,
                "Dapagliflozin": 0.913378593
            },
            "Weibull": {
                "Parameter1": 15.87401052,
                "Parameter2": 615.0857578,
                "Dapagliflozin": -0.414307207
            },
            "Gompertz": {
                "Parameter1": -81.4089466583853,
                "Parameter2": 3.82171906049895e-18,
                "Dapagliflozin": -4.82981810304329
            },
            "Lognormal": {
                "Parameter1": 25.5234425058795,
                "Parameter2": 0.323732965189341,
                "Dapagliflozin": 8.2401099971672
            },
            "Log-logistic": {
                "Parameter1": 15.87401052,
                "Parameter2": 615.0857578,
                "Dapagliflozin": -0.414307207
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00213164003688683,
                "Parameter2": 0,
                "Dapagliflozin": -0.350177296445647
            },
            "Weibull": {
                "Parameter1": 1.46136596504555,
                "Parameter2": 194.271032729697,
                "Dapagliflozin": 0.240585500605027
            },
            "Gompertz": {
                "Parameter1": 0.0455976169436797,
                "Parameter2": 0.00101592714089865,
                "Dapagliflozin": -0.353114518075369
            },
            "Lognormal": {
                "Parameter1": 6.04403643162614,
                "Parameter2": 1.71553368485011,
                "Dapagliflozin": 0.263799413300992
            },
            "Log-logistic": {
                "Parameter1": 1.47918631530853,
                "Parameter2": 186.352760612006,
                "Dapagliflozin": 0.241253322313939
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00108895008323319,
                "Parameter2": 0,
                "Dapagliflozin": -0.766527584139782
            },
            "Weibull": {
                "Parameter1": 0.974966997364705,
                "Parameter2": 1004.24168864242,
                "Dapagliflozin": 0.786001020046779
            },
            "Gompertz": {
                "Parameter1": 0.0000559467269569905,
                "Parameter2": 0.00108671073784803,
                "Dapagliflozin": -0.763610748536645
            },
            "Lognormal": {
                "Parameter1": 8.43277099596164,
                "Parameter2": 2.73140736766016,
                "Dapagliflozin": 0.946082935022454
            },
            "Log-logistic": {
                "Parameter1": 0.981256397405804,
                "Parameter2": 963.866305037326,
                "Dapagliflozin": 0.793873318547654
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000698279602000263,
                "Parameter2": 0,
                "Dapagliflozin": 0.314787294995374
            },
            "Weibull": {
                "Parameter1": 0.962530621888772,
                "Parameter2": 1668.52730077684,
                "Dapagliflozin": -0.327068213426352
            },
            "Gompertz": {
                "Parameter1": -0.00193768600305728,
                "Parameter2": 0.000717765079832842,
                "Dapagliflozin": 0.314332798550654
            },
            "Lognormal": {
                "Parameter1": 9.21353304019208,
                "Parameter2": 2.84750992097218,
                "Dapagliflozin": -0.366641539396332
            },
            "Log-logistic": {
                "Parameter1": 0.968589346000443,
                "Parameter2": 1612.43742055072,
                "Dapagliflozin": -0.332514710554556
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000764122937565082,
                "Parameter2": 0,
                "Dapagliflozin": 0.225566992545735
            },
            "Weibull": {
                "Parameter1": 0.972692583128218,
                "Parameter2": 1457.52846422307,
                "Dapagliflozin": -0.231970941375681
            },
            "Gompertz": {
                "Parameter1": -0.000255511389739109,
                "Parameter2": 0.000767574829747861,
                "Dapagliflozin": 0.22549954913998
            },
            "Lognormal": {
                "Parameter1": 9.09390090557229,
                "Parameter2": 2.81896454746402,
                "Dapagliflozin": -0.338220245132784
            },
            "Log-logistic": {
                "Parameter1": 0.979282401116807,
                "Parameter2": 1405.51563808878,
                "Dapagliflozin": -0.235400856451427
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00142204426096171,
                "Parameter2": 0,
                "Dapagliflozin": -0.330693522494442
            },
            "Weibull": {
                "Parameter1": 0.785604065514475,
                "Parameter2": 1695.59122621266,
                "Dapagliflozin": 0.419654298191562
            },
            "Gompertz": {
                "Parameter1": -0.019171001452694,
                "Parameter2": 0.00184692322989154,
                "Dapagliflozin": -0.329587088088651
            },
            "Lognormal": {
                "Parameter1": 9.02713956139079,
                "Parameter2": 3.26797444195474,
                "Dapagliflozin": 0.615585774366233
            },
            "Log-logistic": {
                "Parameter1": 0.792166756351659,
                "Parameter2": 1593.82061252764,
                "Dapagliflozin": 0.428746818675069
            }
        }
    },
    "eGFR < 50 mL/min/1,73m2": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00497930571914671,
                "Parameter2": 0,
                "Dapagliflozin": -0.353969284585075
            },
            "Weibull": {
                "Parameter1": 1.76782586548447,
                "Parameter2": 82.2140011433278,
                "Dapagliflozin": 0.204205951040292
            },
            "Gompertz": {
                "Parameter1": 0.0667441675025184,
                "Parameter2": 0.00179836063196124,
                "Dapagliflozin": -0.362380268364697
            },
            "Lognormal": {
                "Parameter1": 4.81832672067788,
                "Parameter2": 1.32027359106706,
                "Dapagliflozin": 0.211885767047743
            },
            "Log-logistic": {
                "Parameter1": 1.82215745102372,
                "Parameter2": 76.7647687132279,
                "Dapagliflozin": 0.203861700733558
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.0047111392426437,
                "Parameter2": 0,
                "Dapagliflozin": -0.552973473296352
            },
            "Weibull": {
                "Parameter1": 1.85168319055939,
                "Parameter2": 80.3653955331419,
                "Dapagliflozin": 0.303763330693752
            },
            "Gompertz": {
                "Parameter1": 0.0690394086766988,
                "Parameter2": 0.0016377479517013,
                "Dapagliflozin": -0.56341375647635
            },
            "Lognormal": {
                "Parameter1": 4.75055468185845,
                "Parameter2": 1.24531437541286,
                "Dapagliflozin": 0.351331386398645
            },
            "Log-logistic": {
                "Parameter1": 1.9077649560455,
                "Parameter2": 75.1417892982501,
                "Dapagliflozin": 0.30889377059656
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00102859450481638,
                "Parameter2": 0,
                "Dapagliflozin": -0.267223251175097
            },
            "Weibull": {
                "Parameter1": 1.07909941967617,
                "Parameter2": 746.868153800115,
                "Dapagliflozin": 0.248107345877667
            },
            "Gompertz": {
                "Parameter1": 0.00550221016796702,
                "Parameter2": 0.000952339140446633,
                "Dapagliflozin": -0.265960707781854
            },
            "Lognormal": {
                "Parameter1": 8.05396349077285,
                "Parameter2": 2.4737844292446,
                "Dapagliflozin": 0.254127082410296
            },
            "Log-logistic": {
                "Parameter1": 1.08606655426259,
                "Parameter2": 721.925014000331,
                "Dapagliflozin": 0.24879769062396
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000154289175721959,
                "Parameter2": 0,
                "Dapagliflozin": -1.11094329041267
            },
            "Weibull": {
                "Parameter1": 2.37385640879257,
                "Parameter2": 274.278436195983,
                "Dapagliflozin": 0.470320409474745
            },
            "Gompertz": {
                "Parameter1": 0.103339318448018,
                "Parameter2": 0.0000257690500529746,
                "Dapagliflozin": -1.11516128777723
            },
            "Lognormal": {
                "Parameter1": 6.97738940679817,
                "Parameter2": 1.39892553404679,
                "Dapagliflozin": 0.554658182452539
            },
            "Log-logistic": {
                "Parameter1": 2.37628076458443,
                "Parameter2": 273.37946447206,
                "Dapagliflozin": 0.470726857403799
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00287828947368783,
                "Parameter2": 0,
                "Dapagliflozin": -0.388144635252284
            },
            "Weibull": {
                "Parameter1": 1.36463016400315,
                "Parameter2": 175.316808849403,
                "Dapagliflozin": 0.286133208607241
            },
            "Gompertz": {
                "Parameter1": 0.0344943248472385,
                "Parameter2": 0.00172254853929789,
                "Dapagliflozin": -0.389615075902023
            },
            "Lognormal": {
                "Parameter1": 5.82126327547636,
                "Parameter2": 1.7491421082266,
                "Dapagliflozin": 0.318372003783119
            },
            "Log-logistic": {
                "Parameter1": 1.38819725412266,
                "Parameter2": 165.030860623573,
                "Dapagliflozin": 0.290978993894519
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00141540630309524,
                "Parameter2": 0,
                "Dapagliflozin": -0.643642429867932
            },
            "Weibull": {
                "Parameter1": 1.25851531633753,
                "Parameter2": 360.041729818581,
                "Dapagliflozin": 0.513186240761307
            },
            "Gompertz": {
                "Parameter1": 0.0255823187514531,
                "Parameter2": 0.000978092000247654,
                "Dapagliflozin": -0.643257378177783
            },
            "Lognormal": {
                "Parameter1": 6.93512243900359,
                "Parameter2": 2.0653633735032,
                "Dapagliflozin": 0.653718886810928
            },
            "Log-logistic": {
                "Parameter1": 1.26918838296106,
                "Parameter2": 345.876927729926,
                "Dapagliflozin": 0.521555182782037
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000675992540605862,
                "Parameter2": 0,
                "Dapagliflozin": -0.051994489003197
            },
            "Weibull": {
                "Parameter1": 0.991791352357666,
                "Parameter2": 1529.42569313208,
                "Dapagliflozin": 0.0523784368546701
            },
            "Gompertz": {
                "Parameter1": 0.00346129150690567,
                "Parameter2": 0.000644018188264659,
                "Dapagliflozin": -0.0524791626987537
            },
            "Lognormal": {
                "Parameter1": 9.25408982904406,
                "Parameter2": 2.84516015594993,
                "Dapagliflozin": 0.0661165909533779
            },
            "Log-logistic": {
                "Parameter1": 0.996106699336629,
                "Parameter2": 1488.94310466135,
                "Dapagliflozin": 0.0532838930630128
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.00080687607880735,
                "Parameter2": 0,
                "Dapagliflozin": -0.113969948983016
            },
            "Weibull": {
                "Parameter1": 0.851556627380223,
                "Parameter2": 2426.7017269328,
                "Dapagliflozin": 0.132795011257018
            },
            "Gompertz": {
                "Parameter1": -0.0112279756349767,
                "Parameter2": 0.000936686506618421,
                "Dapagliflozin": -0.111997647019816
            },
            "Lognormal": {
                "Parameter1": 9.95833000170498,
                "Parameter2": 3.28905202915465,
                "Dapagliflozin": 0.153738227512759
            },
            "Log-logistic": {
                "Parameter1": 0.855630865202506,
                "Parameter2": 2343.30684740869,
                "Dapagliflozin": 0.135154367117423
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00180920570899887,
                "Parameter2": 0,
                "Dapagliflozin": -0.402004420623527
            },
            "Weibull": {
                "Parameter1": 1.23134125406974,
                "Parameter2": 312.376832552366,
                "Dapagliflozin": 0.327650234574173
            },
            "Gompertz": {
                "Parameter1": 0.0410079288471906,
                "Parameter2": 0.000978043260884217,
                "Dapagliflozin": -0.403625744995388
            },
            "Lognormal": {
                "Parameter1": 6.99967340031814,
                "Parameter2": 2.22263712050953,
                "Dapagliflozin": 0.433353150804847
            },
            "Log-logistic": {
                "Parameter1": 1.24322023882212,
                "Parameter2": 299.383769153482,
                "Dapagliflozin": 0.3327829169642
            }
        }
    },
    "UACR ≤ 1000": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00145121922892605,
                "Parameter2": 0,
                "Dapagliflozin": -0.438134879137081
            },
            "Weibull": {
                "Parameter1": 1.47814026984622,
                "Parameter2": 240.294037062733,
                "Dapagliflozin": 0.29689660088616
            },
            "Gompertz": {
                "Parameter1": 0.0624849435419003,
                "Parameter2": 0.000543910252145533,
                "Dapagliflozin": -0.439122015256801
            },
            "Lognormal": {
                "Parameter1": 6.73350200638557,
                "Parameter2": 1.92918164916055,
                "Dapagliflozin": 0.319123847136076
            },
            "Log-logistic": {
                "Parameter1": 1.48951052319222,
                "Parameter2": 233.871366507433,
                "Dapagliflozin": 0.296578313255577
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00152863080247337,
                "Parameter2": 0,
                "Dapagliflozin": -1.07248174503456
            },
            "Weibull": {
                "Parameter1": 2.06869037518742,
                "Parameter2": 125.73317739061,
                "Dapagliflozin": 0.520917943075513
            },
            "Gompertz": {
                "Parameter1": 0.0795993197745856,
                "Parameter2": 0.000418543706266803,
                "Dapagliflozin": -1.07899843911379
            },
            "Lognormal": {
                "Parameter1": 5.5786953673773,
                "Parameter2": 1.30741416765953,
                "Dapagliflozin": 0.574291098147186
            },
            "Log-logistic": {
                "Parameter1": 2.0917727790837,
                "Parameter2": 122.257920425239,
                "Dapagliflozin": 0.522581772782408
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.000763542220164698,
                "Parameter2": 0,
                "Dapagliflozin": -0.517229508616495
            },
            "Weibull": {
                "Parameter1": 1.0157210717637,
                "Parameter2": 1233.45492146217,
                "Dapagliflozin": 0.509257168158416
            },
            "Gompertz": {
                "Parameter1": -0.0164571948567709,
                "Parameter2": 0.000951511183370348,
                "Dapagliflozin": -0.518226648729288
            },
            "Lognormal": {
                "Parameter1": 8.67792768251443,
                "Parameter2": 2.63150428503937,
                "Dapagliflozin": 0.517203064863027
            },
            "Log-logistic": {
                "Parameter1": 1.02086538668124,
                "Parameter2": 1196.69276666874,
                "Dapagliflozin": 0.510401977491393
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.0000347064645529408,
                "Parameter2": 0,
                "Dapagliflozin": -19.878948440478
            },
            "Weibull": {
                "Parameter1": 1.00190277017805,
                "Parameter2": 28434.4082019721,
                "Dapagliflozin": 20.997394413793
            },
            "Gompertz": {
                "Parameter1": -0.0581068627138398,
                "Parameter2": 0.0000694864754905338,
                "Dapagliflozin": -8.6084847561151
            },
            "Lognormal": {
                "Parameter1": 13.8224935422648,
                "Parameter2": 3.38773488463662,
                "Dapagliflozin": 14.285693101656
            },
            "Log-logistic": {
                "Parameter1": 1.00266699750654,
                "Parameter2": 28284.1768753235,
                "Dapagliflozin": 12.7633793157059
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00242923923270184,
                "Parameter2": 0,
                "Dapagliflozin": -0.411917748459581
            },
            "Weibull": {
                "Parameter1": 1.41015572425319,
                "Parameter2": 187.334519304693,
                "Dapagliflozin": 0.292526264247614
            },
            "Gompertz": {
                "Parameter1": 0.0376750578037772,
                "Parameter2": 0.00136454521459038,
                "Dapagliflozin": -0.411886218587906
            },
            "Lognormal": {
                "Parameter1": 5.92187021330128,
                "Parameter2": 1.7160477005236,
                "Dapagliflozin": 0.320990647725883
            },
            "Log-logistic": {
                "Parameter1": 1.43018261200925,
                "Parameter2": 178.175381751834,
                "Dapagliflozin": 0.295816946293444
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00113071087351511,
                "Parameter2": 0,
                "Dapagliflozin": -0.695491741656909
            },
            "Weibull": {
                "Parameter1": 1.12966303097602,
                "Parameter2": 592.682873335143,
                "Dapagliflozin": 0.616304882626296
            },
            "Gompertz": {
                "Parameter1": 0.00906115060255064,
                "Parameter2": 0.00099401058506861,
                "Dapagliflozin": -0.694736354915757
            },
            "Lognormal": {
                "Parameter1": 7.60015692797997,
                "Parameter2": 2.31242766891488,
                "Dapagliflozin": 0.763019860574655
            },
            "Log-logistic": {
                "Parameter1": 1.13755324613909,
                "Parameter2": 570.323511594258,
                "Dapagliflozin": 0.625176264691363
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000490242322652794,
                "Parameter2": 0,
                "Dapagliflozin": 0.141130257260564
            },
            "Weibull": {
                "Parameter1": 1.01002274215461,
                "Parameter2": 1954.17495381167,
                "Dapagliflozin": -0.13971747983793
            },
            "Gompertz": {
                "Parameter1": 0.00691893867781807,
                "Parameter2": 0.000444050851796365,
                "Dapagliflozin": 0.142434181101412
            },
            "Lognormal": {
                "Parameter1": 9.6677255880581,
                "Parameter2": 2.87208098096234,
                "Dapagliflozin": -0.141940254960571
            },
            "Log-logistic": {
                "Parameter1": 1.01342832415603,
                "Parameter2": 1916.05104376668,
                "Dapagliflozin": -0.142288480587546
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000631402624240116,
                "Parameter2": 0,
                "Dapagliflozin": 0.257175751175902
            },
            "Weibull": {
                "Parameter1": 1.13026163316244,
                "Parameter2": 991.091357930523,
                "Dapagliflozin": -0.2275761407744
            },
            "Gompertz": {
                "Parameter1": 0.0135735095142806,
                "Parameter2": 0.000519511319158366,
                "Dapagliflozin": 0.257859388101925
            },
            "Lognormal": {
                "Parameter1": 8.63920952730859,
                "Parameter2": 2.51197555177039,
                "Dapagliflozin": -0.282257088257919
            },
            "Log-logistic": {
                "Parameter1": 1.13659260062668,
                "Parameter2": 963.459711086037,
                "Dapagliflozin": -0.227768621405265
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00152344095558691,
                "Parameter2": 0,
                "Dapagliflozin": -0.428555521543703
            },
            "Weibull": {
                "Parameter1": 1.04825548563552,
                "Parameter2": 566.709558134325,
                "Dapagliflozin": 0.408957708597837
            },
            "Gompertz": {
                "Parameter1": 0.0293014820281803,
                "Parameter2": 0.000985629344206713,
                "Dapagliflozin": -0.429291880398052
            },
            "Lognormal": {
                "Parameter1": 7.91390567583952,
                "Parameter2": 2.65528977069409,
                "Dapagliflozin": 0.578154442118674
            },
            "Log-logistic": {
                "Parameter1": 1.05631323674478,
                "Parameter2": 543.260493511852,
                "Dapagliflozin": 0.415309012437802
            }
        }
    },
    "UACR > 1000": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00671162959095558,
                "Parameter2": 0,
                "Dapagliflozin": -0.382429105693647
            },
            "Weibull": {
                "Parameter1": 1.7220283314191,
                "Parameter2": 71.5024752331696,
                "Dapagliflozin": 0.228982697862264
            },
            "Gompertz": {
                "Parameter1": 0.0616258556060346,
                "Parameter2": 0.00262203368973004,
                "Dapagliflozin": -0.397691052783356
            },
            "Lognormal": {
                "Parameter1": 4.56833519285179,
                "Parameter2": 1.29707791030829,
                "Dapagliflozin": 0.248825252319243
            },
            "Log-logistic": {
                "Parameter1": 1.79599942529402,
                "Parameter2": 65.351299296805,
                "Dapagliflozin": 0.229769648131278
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00700614584292422,
                "Parameter2": 0,
                "Dapagliflozin": -0.536842809349396
            },
            "Weibull": {
                "Parameter1": 1.81406785891915,
                "Parameter2": 66.1959695234851,
                "Dapagliflozin": 0.304675662118616
            },
            "Gompertz": {
                "Parameter1": 0.0644072898874432,
                "Parameter2": 0.0026235053107121,
                "Dapagliflozin": -0.555537171307597
            },
            "Lognormal": {
                "Parameter1": 4.40706734768864,
                "Parameter2": 1.18723589421545,
                "Dapagliflozin": 0.357979385101991
            },
            "Log-logistic": {
                "Parameter1": 1.89843052524994,
                "Parameter2": 60.3432058212198,
                "Dapagliflozin": 0.310648013554669
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00107588440917682,
                "Parameter2": 0,
                "Dapagliflozin": -0.0269568642299671
            },
            "Weibull": {
                "Parameter1": 1.14251345000708,
                "Parameter2": 598.193453710273,
                "Dapagliflozin": 0.0246368002990764
            },
            "Gompertz": {
                "Parameter1": 0.0204286670551016,
                "Parameter2": 0.00079777339555098,
                "Dapagliflozin": -0.0268756387663903
            },
            "Lognormal": {
                "Parameter1": 7.79240232654777,
                "Parameter2": 2.36383171377743,
                "Dapagliflozin": 0.0231370075814673
            },
            "Log-logistic": {
                "Parameter1": 1.15077526995135,
                "Parameter2": 578.518604040738,
                "Dapagliflozin": 0.022465675418512
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.000192122215924225,
                "Parameter2": 0,
                "Dapagliflozin": -0.943247596104353
            },
            "Weibull": {
                "Parameter1": 2.77932135729399,
                "Parameter2": 183.783588519016,
                "Dapagliflozin": 0.343701872650961
            },
            "Gompertz": {
                "Parameter1": 0.123599172098301,
                "Parameter2": 0.0000200347100936601,
                "Dapagliflozin": -0.957371222538147
            },
            "Lognormal": {
                "Parameter1": 6.382878683902,
                "Parameter2": 1.20236488974673,
                "Dapagliflozin": 0.427077356666176
            },
            "Log-logistic": {
                "Parameter1": 2.78312144065458,
                "Parameter2": 183.116910823007,
                "Dapagliflozin": 0.344079262809003
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00291785234967268,
                "Parameter2": 0,
                "Dapagliflozin": -0.353078032553954
            },
            "Weibull": {
                "Parameter1": 1.35315998313809,
                "Parameter2": 177.100997519333,
                "Dapagliflozin": 0.263358831485048
            },
            "Gompertz": {
                "Parameter1": 0.0351317661289603,
                "Parameter2": 0.00171314595313513,
                "Dapagliflozin": -0.357245255540657
            },
            "Lognormal": {
                "Parameter1": 5.85095919558425,
                "Parameter2": 1.77549385290452,
                "Dapagliflozin": 0.294794619322766
            },
            "Log-logistic": {
                "Parameter1": 1.3772592093348,
                "Parameter2": 166.51149728754,
                "Dapagliflozin": 0.267130413117301
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.00153168366655699,
                "Parameter2": 0,
                "Dapagliflozin": -0.656836834024486
            },
            "Weibull": {
                "Parameter1": 1.21516037747418,
                "Parameter2": 371.252568815585,
                "Dapagliflozin": 0.542611838771804
            },
            "Gompertz": {
                "Parameter1": 0.0262244810536085,
                "Parameter2": 0.00104225317490588,
                "Dapagliflozin": -0.660413465840272
            },
            "Lognormal": {
                "Parameter1": 7.02838450638226,
                "Parameter2": 2.15678611505776,
                "Dapagliflozin": 0.688477642380841
            },
            "Log-logistic": {
                "Parameter1": 1.22587503835025,
                "Parameter2": 355.899578276965,
                "Dapagliflozin": 0.550884164468733
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000896418487664515,
                "Parameter2": 0,
                "Dapagliflozin": 0.0180042728157443
            },
            "Weibull": {
                "Parameter1": 0.970708898324286,
                "Parameter2": 1248.4240910536,
                "Dapagliflozin": -0.0187598778561046
            },
            "Gompertz": {
                "Parameter1": -0.000973613441942048,
                "Parameter2": 0.000908040013047798,
                "Dapagliflozin": 0.0190950038294239
            },
            "Lognormal": {
                "Parameter1": 8.83486045178679,
                "Parameter2": 2.79924079432627,
                "Dapagliflozin": -0.0220687440134574
            },
            "Log-logistic": {
                "Parameter1": 0.976842948865327,
                "Parameter2": 1204.65510613768,
                "Dapagliflozin": -0.0196736096871622
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.000975948774525438,
                "Parameter2": 0,
                "Dapagliflozin": -0.252935552666257
            },
            "Weibull": {
                "Parameter1": 0.742637300999308,
                "Parameter2": 3634.60957348178,
                "Dapagliflozin": 0.337171968420616
            },
            "Gompertz": {
                "Parameter1": -0.0271426713449427,
                "Parameter2": 0.00138349800255528,
                "Dapagliflozin": -0.251302193794939
            },
            "Lognormal": {
                "Parameter1": 10.4299788040239,
                "Parameter2": 3.65912622737642,
                "Dapagliflozin": 0.345294809212162
            },
            "Log-logistic": {
                "Parameter1": 0.747484973148065,
                "Parameter2": 3465.00178590925,
                "Dapagliflozin": 0.333825514672726
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00189100021097401,
                "Parameter2": 0,
                "Dapagliflozin": -0.350596661826003
            },
            "Weibull": {
                "Parameter1": 1.10785137886018,
                "Parameter2": 395.574791124186,
                "Dapagliflozin": 0.317393826223037
            },
            "Gompertz": {
                "Parameter1": 0.0212944943744091,
                "Parameter2": 0.00138779949331087,
                "Dapagliflozin": -0.353114741162251
            },
            "Lognormal": {
                "Parameter1": 7.11729751241499,
                "Parameter2": 2.32923146556725,
                "Dapagliflozin": 0.412051552031437
            },
            "Log-logistic": {
                "Parameter1": 1.11927384018295,
                "Parameter2": 376.268194971193,
                "Dapagliflozin": 0.321945440541034
            }
        }
    },
    "No T2DM with eGFR ≥ 30 & No HF": {
        "ESRD": {
            "Exponential": {
                "Parameter1": 0.00582603620686571,
                "Parameter2": 0,
                "Dapagliflozin": -0.323922621629916
            },
            "Weibull": {
                "Parameter1": 1.56137890920942,
                "Parameter2": 86.4690930170415,
                "Dapagliflozin": 0.210184419144061
            },
            "Gompertz": {
                "Parameter1": 0.0549138701549475,
                "Parameter2": 0.00257070080943989,
                "Dapagliflozin": -0.32862422584015
            },
            "Lognormal": {
                "Parameter1": 4.8901179381286,
                "Parameter2": 1.48390238753584,
                "Dapagliflozin": 0.205781941378175
            },
            "Log-logistic": {
                "Parameter1": 1.61568754205103,
                "Parameter2": 79.5487561768406,
                "Dapagliflozin": 0.207258189073871
            }
        },
        "≥ 50% sustained decline in eGFR": {
            "Exponential": {
                "Parameter1": 0.00416484519246342,
                "Parameter2": 0,
                "Dapagliflozin": -0.325652772148306
            },
            "Weibull": {
                "Parameter1": 1.68995912330242,
                "Parameter2": 96.4891112486985,
                "Dapagliflozin": 0.194972486705012
            },
            "Gompertz": {
                "Parameter1": 0.0553849347962566,
                "Parameter2": 0.0018161060652112,
                "Dapagliflozin": -0.327603494945429
            },
            "Lognormal": {
                "Parameter1": 4.95409291392939,
                "Parameter2": 1.34633189227258,
                "Dapagliflozin": 0.234364828022611
            },
            "Log-logistic": {
                "Parameter1": 1.7381548159733,
                "Parameter2": 89.8710868751224,
                "Dapagliflozin": 0.200215096490464
            }
        },
        "CV Death": {
            "Exponential": {
                "Parameter1": 0.00049055712784546,
                "Parameter2": 0,
                "Dapagliflozin": -0.0777385666242114
            },
            "Weibull": {
                "Parameter1": 0.892177571045366,
                "Parameter2": 3447.25619171457,
                "Dapagliflozin": 0.0863822196230798
            },
            "Gompertz": {
                "Parameter1": -0.0273834324689013,
                "Parameter2": 0.000694308225012423,
                "Dapagliflozin": -0.0765316741617926
            },
            "Lognormal": {
                "Parameter1": 10.2716851451548,
                "Parameter2": 3.14949046670463,
                "Dapagliflozin": 0.129417637000145
            },
            "Log-logistic": {
                "Parameter1": 0.895263807245922,
                "Parameter2": 3359.89843906094,
                "Dapagliflozin": 0.0887627905540531
            }
        },
        "Renal Death": {
            "Exponential": {
                "Parameter1": 0.0000981114255690865,
                "Parameter2": 0,
                "Dapagliflozin": -0.665525231515775
            },
            "Weibull": {
                "Parameter1": 1.25553858627962,
                "Parameter2": 3040.64127323478,
                "Dapagliflozin": 0.531128205008599
            },
            "Gompertz": {
                "Parameter1": 0.0168428420157353,
                "Parameter2": 0.000077119433148704,
                "Dapagliflozin": -0.661921726077894
            },
            "Lognormal": {
                "Parameter1": 10.4538466298088,
                "Parameter2": 2.58447051940571,
                "Dapagliflozin": 0.658418677662182
            },
            "Log-logistic": {
                "Parameter1": 1.25675521936445,
                "Parameter2": 3021.51606090766,
                "Dapagliflozin": 0.531859117847578
            }
        },
        "ACM": {
            "Exponential": {
                "Parameter1": 0.00191317279859719,
                "Parameter2": 0,
                "Dapagliflozin": -0.641801674634512
            },
            "Weibull": {
                "Parameter1": 1.23596468639362,
                "Parameter2": 296.293633328009,
                "Dapagliflozin": 0.520352979135925
            },
            "Gompertz": {
                "Parameter1": 0.0146307289802191,
                "Parameter2": 0.00155415708535714,
                "Dapagliflozin": -0.642199968442675
            },
            "Lognormal": {
                "Parameter1": 6.52891775253929,
                "Parameter2": 1.98111396585692,
                "Dapagliflozin": 0.600407909572941
            },
            "Log-logistic": {
                "Parameter1": 1.2516458604161,
                "Parameter2": 280.531555640768,
                "Dapagliflozin": 0.529733978866043
            }
        },
        "Hospitalisation for HF": {
            "Exponential": {
                "Parameter1": 0.000396089530876051,
                "Parameter2": 0,
                "Dapagliflozin": -0.445364608287141
            },
            "Weibull": {
                "Parameter1": 1.45215900378793,
                "Parameter2": 612.973513001156,
                "Dapagliflozin": 0.308346648931065
            },
            "Gompertz": {
                "Parameter1": 0.0231972315342311,
                "Parameter2": 0.000283635048397067,
                "Dapagliflozin": -0.446727503154032
            },
            "Lognormal": {
                "Parameter1": 7.7869194421734,
                "Parameter2": 1.95912056256242,
                "Dapagliflozin": 0.34679962248835
            },
            "Log-logistic": {
                "Parameter1": 1.45581581148998,
                "Parameter2": 605.350938704477,
                "Dapagliflozin": 0.310331322267155
            }
        },
        "MI": {
            "Exponential": {
                "Parameter1": 0.000495811159273719,
                "Parameter2": 0,
                "Dapagliflozin": -0.488482815810326
            },
            "Weibull": {
                "Parameter1": 0.815968572967401,
                "Parameter2": 5374.46274450475,
                "Dapagliflozin": 0.596652786880218
            },
            "Gompertz": {
                "Parameter1": -0.0312023275292614,
                "Parameter2": 0.000726619942931211,
                "Dapagliflozin": -0.468619602446585
            },
            "Lognormal": {
                "Parameter1": 11.2126627948283,
                "Parameter2": 3.5544418719454,
                "Dapagliflozin": 0.57527172480532
            },
            "Log-logistic": {
                "Parameter1": 0.818711194212963,
                "Parameter2": 5237.50654074299,
                "Dapagliflozin": 0.596333302221481
            }
        },
        "Stroke": {
            "Exponential": {
                "Parameter1": 0.00074590015291719,
                "Parameter2": 0,
                "Dapagliflozin": -1.3026892967913
            },
            "Weibull": {
                "Parameter1": 0.833738603199404,
                "Parameter2": 2940.03211020543,
                "Dapagliflozin": 1.56035089269927
            },
            "Gompertz": {
                "Parameter1": -0.0121478154864796,
                "Parameter2": 0.000875245092382536,
                "Dapagliflozin": -1.29877138419454
            },
            "Lognormal": {
                "Parameter1": 10.4688289611744,
                "Parameter2": 3.48316322376039,
                "Dapagliflozin": 1.69956309862829
            },
            "Log-logistic": {
                "Parameter1": 0.83693219008465,
                "Parameter2": 2852.06452832043,
                "Dapagliflozin": 1.56333094718777
            }
        },
        "AKI": {
            "Exponential": {
                "Parameter1": 0.00145508652834882,
                "Parameter2": 0,
                "Dapagliflozin": -0.461201619291267
            },
            "Weibull": {
                "Parameter1": 1.13101793504036,
                "Parameter2": 471.031597290044,
                "Dapagliflozin": 0.408926086008248
            },
            "Gompertz": {
                "Parameter1": 0.0231868770562551,
                "Parameter2": 0.00104382735729855,
                "Dapagliflozin": -0.463661813898866
            },
            "Lognormal": {
                "Parameter1": 7.42372531053744,
                "Parameter2": 2.34788618624496,
                "Dapagliflozin": 0.528330159195073
            },
            "Log-logistic": {
                "Parameter1": 1.13996485670163,
                "Parameter2": 452.29327685798,
                "Dapagliflozin": 0.414630211155189
            }
        }
    }
}