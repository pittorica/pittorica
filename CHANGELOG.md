# Changelog

## [0.26.3](https://github.com/pittorica/ui/compare/v0.26.2...v0.26.3) (2026-02-23)

## [0.26.2](https://github.com/pittorica/ui/compare/v0.26.1...v0.26.2) (2026-02-22)


### Bug Fixes

* **react:** correct displayName assignment for compound components ([8141ac6](https://github.com/pittorica/ui/commit/8141ac6e767c447b045aaa671ff453fbe0ed5881))
* **react:** standardize compound component exports ([2249632](https://github.com/pittorica/ui/commit/22496322e655610b224f9dbb67248b449ba491c8)), closes [#130](https://github.com/pittorica/ui/issues/130)
* **web:** add [@dcdavidev](https://github.com/dcdavidev) ([b06f39a](https://github.com/pittorica/ui/commit/b06f39aa1d4479ee3e43f6d053f63207fb8d46a7))

## [0.26.1](https://github.com/pittorica/ui/compare/v0.26.0...v0.26.1) (2026-02-22)


### Bug Fixes

* **workspace:** add vercel deploy ([0e3600c](https://github.com/pittorica/ui/commit/0e3600ccfc60565b44d88d29f6fff23e2f5195c7))

# [0.26.0](https://github.com/pittorica/ui/compare/v0.25.0...v0.26.0) (2026-02-22)


### Bug Fixes

* **aspect-ratio:** improve styling and expand documentation ([808bb64](https://github.com/pittorica/ui/commit/808bb64717c5f9099a2667038ba251156ef55d8a))
* **avatar:** add color prop and improve dark mode support ([aaec524](https://github.com/pittorica/ui/commit/aaec52402602a1f53e22bc5b47a6209a4ccdec39)), closes [hi#contrast](https://github.com/hi/issues/contrast)
* **button:** improve elevated variant visibility in light mode ([8f96904](https://github.com/pittorica/ui/commit/8f96904c758b1ff4bae6c1ed11a67790f7c27787))
* **carousel:** implement dark mode support and improve theme propagation ([837104d](https://github.com/pittorica/ui/commit/837104dbf90c3f1a3daae5b31d11d7b75376e909))
* **chip:** enhance deletable variant, dark mode, and accessibility ([4e6a5df](https://github.com/pittorica/ui/commit/4e6a5df38e5bbf418bcfbb63ff13499c0ec03697))
* **code:** restore highlighting and standardize dark theme ([9b98d80](https://github.com/pittorica/ui/commit/9b98d80acc7c9b0e1eefa448501c68ab297ce175)), closes [hi#contrast](https://github.com/hi/issues/contrast)
* correct TextField usage on home page ([1bcb2ac](https://github.com/pittorica/ui/commit/1bcb2ac86d153dac96a5262bab5b13afa446c869))
* **dialog:** ensure consistent dark mode support in portals ([db63991](https://github.com/pittorica/ui/commit/db6399129a53e9fc31c0338a5dd3f3ed8f182e65))
* improve Checkbox and CheckboxCard dark mode visibility ([edffe0d](https://github.com/pittorica/ui/commit/edffe0d42291ea74b49c4ce0655bd3dd59408c61))
* improve Checkbox dark mode visibility and document 'required' prop ([43953f9](https://github.com/pittorica/ui/commit/43953f98138f426ba4e97140ee2d9dce4a5e3163))
* improve Radio/RadioCard dark mode and add 'required' prop ([844c773](https://github.com/pittorica/ui/commit/844c773cd162ee1a7edfa2d7770b5ebdf4ee13ba))
* **popover:** implement dark mode support and enhance styling ([6f9a95d](https://github.com/pittorica/ui/commit/6f9a95d88302aeeecc65d74f204362f7334da0da))
* refactor compound components to use Object.assign pattern ([7a70983](https://github.com/pittorica/ui/commit/7a709831ffdfdeed134f99fea838c1b496b28aa1))
* refactor TextField to use Object.assign pattern ([3e2e5c7](https://github.com/pittorica/ui/commit/3e2e5c7492913c6b5d416cd37a45aec6b9e95dee))
* resolve invalid color tokens and optimize dark mode visibility ([2693131](https://github.com/pittorica/ui/commit/2693131499ae1c7a2f42f0f9afe78c77e1ed8bf2))
* **sheet:** implement dark mode support and improve backdrop ([47edbc4](https://github.com/pittorica/ui/commit/47edbc41a315e3c26097f8d183a2b70e2996cb72))
* **skeleton:** improve dark mode visibility and documentation ([bfaacca](https://github.com/pittorica/ui/commit/bfaaccaae17c7004ba8ad0b83268f78032bb0646))
* **toast:** add color support, dark mode, and progress indicator ([8ba1d22](https://github.com/pittorica/ui/commit/8ba1d22363ebbbd88adc0ec50e9ca036b3457b6c))
* **tooltip:** enhance dark mode support and fix text visibility ([4e09883](https://github.com/pittorica/ui/commit/4e09883c9ed95edf6bab6d9b914d89f4b76eb510))


### Features

* add 'required' prop to CheckboxGroup and update docs ([01f8aee](https://github.com/pittorica/ui/commit/01f8aee87cbf83b737607cbd18405f82261d8f82))
* add 'required' to CheckboxCard and improve dark mode ([b3789dd](https://github.com/pittorica/ui/commit/b3789dd88ef9ceb9a3c1df23ad5a81ab534e4c83))
* add fancy OG image route ([4694fd3](https://github.com/pittorica/ui/commit/4694fd32405d942946317b9bd6352a177015a4e2))
* add InputOTP component and documentation ([07f1a8c](https://github.com/pittorica/ui/commit/07f1a8ca83d0908dae48b19dea1727077ad6e99e))
* **alert-dialog:** refactor to standalone component ([4f08b99](https://github.com/pittorica/ui/commit/4f08b998bb67f6d23f79f912cfdf46a40f788080))
* **blockquote:** add fancy variants and improve dark mode support ([da66e79](https://github.com/pittorica/ui/commit/da66e7985c66bf317521656ca25e9c0cba1c0b96))
* **box:** add required prop to support form validation ([f64f6e4](https://github.com/pittorica/ui/commit/f64f6e4904a9fdd6172325a3af3540493d4bf180))
* **callout:** add layout props and enhance accessibility ([9e726e0](https://github.com/pittorica/ui/commit/9e726e04d810763f0722a046f1db5c96bb2f3568))
* **container:** add xl breakpoint and refine gutter logic ([5a614a7](https://github.com/pittorica/ui/commit/5a614a7b4b4ea6e2c7dc3a89a5e0b1e28c0a990a))
* delete web app ([4548195](https://github.com/pittorica/ui/commit/454819548ace32375d0f63a2e5d11d351fc177e8))
* implement full 'error' color scale and improve Radio visibility ([6e5b984](https://github.com/pittorica/ui/commit/6e5b9848841931fb91edda076a8ad92152578088))
* init app ([ca8f92b](https://github.com/pittorica/ui/commit/ca8f92b4b7d780b99a3759169f2715d69976a4bd))
* **inset:** optimize margin logic and improve border-radius inheritance ([f6c33af](https://github.com/pittorica/ui/commit/f6c33aff642e0928b680c0afe99bc70ab195eeb6))
* **pittorica:** integrate Fontsource fonts and refine fancy blockquote ([3d337fd](https://github.com/pittorica/ui/commit/3d337fd8571f5e04c3d6e14569514ea37a8158f1))
* **react:** improve typography with variants and dark mode ([789f032](https://github.com/pittorica/ui/commit/789f032de865a5831c7b6e515b5875c50ace8fba))
* **section:** expand size scale and refine responsive padding ([93351d1](https://github.com/pittorica/ui/commit/93351d1e2a9d1257620fa6544fa25bf81c021c73))
* **stack:** support polymorphism and direction prop ([3c26b9a](https://github.com/pittorica/ui/commit/3c26b9a0d21341052f0aca1131a5c388cd39765f))
* **web:** add a chip with current version ([38b485d](https://github.com/pittorica/ui/commit/38b485d00b9a2a3244971161c3059ba974245b8e))
* **web:** add Cookie banner and legal routes ([2c44abf](https://github.com/pittorica/ui/commit/2c44abfd2670ce8d721db96123a2c08c9d4995fc))
* **web:** add get-started route ([c8e4e20](https://github.com/pittorica/ui/commit/c8e4e209b9cf3a32f76c909d50d2acf91c2e72db))
* **web:** add theming route ([8a41a39](https://github.com/pittorica/ui/commit/8a41a3947c2dcf0696363076372b20d128b92254))
* **web:** add typography route ([70faf90](https://github.com/pittorica/ui/commit/70faf90b348951b508efb6c304b60330f8c002fe))
* **web:** enhance layout and add component documentation foundation ([3aac048](https://github.com/pittorica/ui/commit/3aac048fc2bd6e18a78fa59312e28a77e1539303))
* **web:** improve appbar, init sidenavs ([8110cc9](https://github.com/pittorica/ui/commit/8110cc9b7b2465ae3de042e5ab8d179e3678f4f8))
* **web:** init appbar ([fa671eb](https://github.com/pittorica/ui/commit/fa671eb7ee11f60d1cbdbb41da32f30417545993))
* **web:** reorganize component docs and add state context ([9bd3a88](https://github.com/pittorica/ui/commit/9bd3a88b2e0861857dbb17a4f37d67ea8684ab99))
* **web:** toggle theme appearace ([815b64f](https://github.com/pittorica/ui/commit/815b64f11a5a016cd0bc065290953962924c55b4))

# [0.25.0](https://github.com/pittorica/ui/compare/v0.24.0...v0.25.0) (2026-02-18)

### Bug Fixes

- **workspace:** fix box type prop ([2b3052c](https://github.com/pittorica/ui/commit/2b3052c88708dd29f69f96fe8dc32cc26785051a))

### Features

- **code:** delete theme prop, create header ([29b69bf](https://github.com/pittorica/ui/commit/29b69bf21c742c09b123e7a78e6ce12f30bf6afc))
- **web:** add alert-dialog route ([67a7d85](https://github.com/pittorica/ui/commit/67a7d85598333a0c2cf170fadf948b6125d05824))
- **web:** add aspect-ratio route ([ef968cd](https://github.com/pittorica/ui/commit/ef968cd1878fd2d451a7097403cf86559bdc967e))
- **web:** add footer ([1d6c7d7](https://github.com/pittorica/ui/commit/1d6c7d7a78b30926739982a1987836002c8fb794))
- **web:** improve api section ([6d8819e](https://github.com/pittorica/ui/commit/6d8819e373eb5a072c49eb77712db30e663e39d0))
- **web:** init components ([663f009](https://github.com/pittorica/ui/commit/663f00963e6a2823e83bb1f52be16a221af5a470))
- **web:** init landing page ([6da65c2](https://github.com/pittorica/ui/commit/6da65c2d1a98325b51ff6eed9effc2a4c60d0900))

# [0.24.0](https://github.com/pittorica/ui/compare/v0.23.2...v0.24.0) (2026-02-10)

### Features

- **carousel:** add fullscreen preview ([a2a958c](https://github.com/pittorica/ui/commit/a2a958c2f915dff80352d850c02cec748c4a3559))

## [0.23.2](https://github.com/pittorica/ui/compare/v0.23.1...v0.23.2) (2026-02-09)

### Bug Fixes

- add prop name ([11028c3](https://github.com/pittorica/ui/commit/11028c3977aafdf80996852e0777acabb37e5db0))

## [0.23.1](https://github.com/pittorica/ui/compare/v0.23.0...v0.23.1) (2026-02-08)

### Bug Fixes

- **callout:** fix export ([be3c030](https://github.com/pittorica/ui/commit/be3c030bc6c8f7ffdcf5077c55a226b8a0aebab7))

# [0.23.0](https://github.com/pittorica/ui/compare/v0.22.4...v0.23.0) (2026-02-07)

### Features

- make components more responsive and more expressive ([8f0e213](https://github.com/pittorica/ui/commit/8f0e213b65b0aebc47df2be85f2136246593af1b))

## [0.22.4](https://github.com/pittorica/ui/compare/v0.22.3...v0.22.4) (2026-02-06)

### Bug Fixes

- **carousel:** improvements, add navigation ([1a836cd](https://github.com/pittorica/ui/commit/1a836cdee1a7508e2e0f589aa117c3a6489312a8))

## [0.22.3](https://github.com/pittorica/ui/compare/v0.22.2...v0.22.3) (2026-02-05)

### Bug Fixes

- remove size prop from text ([1656016](https://github.com/pittorica/ui/commit/1656016974634f32069bd8010dbdffb3b8555829))

## [0.22.2](https://github.com/pittorica/ui/compare/v0.22.1...v0.22.2) (2026-02-05)

### Bug Fixes

- remove size from text ([c48cae9](https://github.com/pittorica/ui/commit/c48cae9071a26645b62023629190372da104e9b4))

## [0.22.1](https://github.com/pittorica/ui/compare/v0.22.0...v0.22.1) (2026-02-05)

### Bug Fixes

- fix missing colors and heading size ([c67fbb8](https://github.com/pittorica/ui/commit/c67fbb8082e0d3d307d9b995d60473521e242a19))

# [0.22.0](https://github.com/pittorica/ui/compare/v0.21.0...v0.22.0) (2026-02-04)

### Bug Fixes

- **blockquote-react:** add a colored border ([1f5d3b5](https://github.com/pittorica/ui/commit/1f5d3b551a2f6d0966213c33ac79163e6c6cd661))
- **code-react:** colors ([64c23d1](https://github.com/pittorica/ui/commit/64c23d1f23bdb5607947ee6bc6c5fa69c76f873a))
- final touches ([4c590c1](https://github.com/pittorica/ui/commit/4c590c1d2c86d62edd39290c92e1d6a719afdb23))
- fix ref object ([b259398](https://github.com/pittorica/ui/commit/b2593980893bc64519c3e405b0806be1143f64c8))
- make packages ssr friendly ([0d49dc7](https://github.com/pittorica/ui/commit/0d49dc759a42ea5e12230b431d5e30d4f647225a))
- **sheet:** fix button variant ([4388d02](https://github.com/pittorica/ui/commit/4388d027caf166aa0d896854c8323b75ebbff31f))

### Features

- add box react component ([c9db6fd](https://github.com/pittorica/ui/commit/c9db6fded4e3eb268cf9e4336a531e9bde29427f))
- add checkbox ([1b89750](https://github.com/pittorica/ui/commit/1b89750d04ff598fb21780d91c732a61c0fd6b04))
- add Flex and Stack components ([8c3d0d2](https://github.com/pittorica/ui/commit/8c3d0d29024dae727945b5f09d0cfbada08fe1d6))
- add inline components and code ([5880db0](https://github.com/pittorica/ui/commit/5880db0e9074c02ca2f4359a2cf5919f3cb9b9f0))
- **alert-dialog-react:** add AlertDialog ([acf977f](https://github.com/pittorica/ui/commit/acf977f64fc72749b0ee69df03e9739b42a6f9f4))
- **aspect-ratio-react:** add aspect ratio ([6e5953f](https://github.com/pittorica/ui/commit/6e5953f7bc9553905bb2fc9427ff1524fa2a2111))
- **avatar-react:** add avatar ([0cfaaf8](https://github.com/pittorica/ui/commit/0cfaaf8842b7a4230220c2cf2a344eab90e10fde))
- **badge-react:** add Badge ([696e53f](https://github.com/pittorica/ui/commit/696e53f0ce65a682e8886b13e4afcb9d7fdb79f6))
- **button-react:** add button ([cd6dcd3](https://github.com/pittorica/ui/commit/cd6dcd3ae905aa5511a7d400c93f55d0809647a8))
- **callout-react:** add callout ([5aa1fc8](https://github.com/pittorica/ui/commit/5aa1fc87dbc6da25a6192202115ecba340770bfc))
- **card-react:** add card ([03b6613](https://github.com/pittorica/ui/commit/03b661380b2b54e52729c3280cb3a459a2aea476))
- **carousel:** add carousel react ([c8ea860](https://github.com/pittorica/ui/commit/c8ea8603db2fb51623ff2c6f442332877dc57b47))
- **chip-react:** add Chip ([01231fc](https://github.com/pittorica/ui/commit/01231fc681340ac62bbca04cf9c9173f0a48a941))
- **container-react:** add Container react component ([fecbb85](https://github.com/pittorica/ui/commit/fecbb8531b60df6c1ee3e45f80645b11ace730ad))
- **context-menu-react:** add context menu ([abc9151](https://github.com/pittorica/ui/commit/abc9151b747e8ff8627616e41a09d67b7bc7348b))
- **data-list-react:** add data list ([f98dd22](https://github.com/pittorica/ui/commit/f98dd22ed87dea0435aca1a9bee0b9ed54ccb904))
- **dialog-react:** add dialog ([319faae](https://github.com/pittorica/ui/commit/319faae9d3f373d0d977b01974045d8b05aa82ad))
- **divider-react:** add divider ([54b7de5](https://github.com/pittorica/ui/commit/54b7de59994b68c8164cf51f64b5ab8ef83d9088))
- **dropdown-menu-react:** add dropdown menu ([bcbf8a7](https://github.com/pittorica/ui/commit/bcbf8a729540529ed7fd353cfc679c1860396530))
- **grid-react:** add Grid react component ([0f6b464](https://github.com/pittorica/ui/commit/0f6b464c0ac7966147ca204323a4f7a0d414147e))
- **heading-react:** add Heading component ([9c9bc0c](https://github.com/pittorica/ui/commit/9c9bc0c99229f8b1bd2d9804642fc25327fd063c))
- **hover-card-react:** add hover card ([93fe59a](https://github.com/pittorica/ui/commit/93fe59aadde3c4a862a3485c56508435c5d30cab))
- **icon-button-react:** add icon button ([750a269](https://github.com/pittorica/ui/commit/750a26927c4a64cd1b1df500b73c467308c32906))
- **inset-react:** add inset ([c6ab0e4](https://github.com/pittorica/ui/commit/c6ab0e4f6d279c1c712e7f2fbeab5972947af427))
- **pittorica:** create base style ([db4c2b2](https://github.com/pittorica/ui/commit/db4c2b2c5c0001014525110582efcd2fc4d20cce))
- **popover-react:** add popover ([9bf124d](https://github.com/pittorica/ui/commit/9bf124d2d7c7095c6aeb796dd4de4ade68913b89))
- **progress-react:** add progress ([a7fe95e](https://github.com/pittorica/ui/commit/a7fe95ec4c851cd3145e5c320412c7d3e235d768))
- **radio-card-react:** add radio card ([69a1537](https://github.com/pittorica/ui/commit/69a15377035f5e8ae307b3be0d4c9bea2adcd751))
- **radio-group-react:** add radio group ([4b7a64d](https://github.com/pittorica/ui/commit/4b7a64d619c0abcfc67bd3d6b6c517165c6887e1))
- **radio-react:** add radio ([49d7a00](https://github.com/pittorica/ui/commit/49d7a002c7f3847d625cf08dbed069586a70f0de))
- **react-theme:** create the foundation of the pittorica react-theme ([25ffc6d](https://github.com/pittorica/ui/commit/25ffc6d5c33dcd9fdc258bad582a5d5b7d8e23a3))
- **react:** export all react packages ([1ead072](https://github.com/pittorica/ui/commit/1ead0722402c6521dc7d4bb91eb0d0f6f0723deb))
- **section-react:** add Section react component ([fe0f624](https://github.com/pittorica/ui/commit/fe0f624b4d38aec641c7c7297a9addaf28531228))
- **segmented-control-react:** add segmented control ([36f24c2](https://github.com/pittorica/ui/commit/36f24c2173fc408b1e405315cefef53b666fd3ff))
- **select:** add select react ([7868f9e](https://github.com/pittorica/ui/commit/7868f9e3bbb1321734cba36c764629d13b8e20b5))
- **sheet:** add sheet react ([10b4b58](https://github.com/pittorica/ui/commit/10b4b589b177f26125024a4ee0132ffc8cf3e665))
- **skeleton-react:** add skeleton ([299b789](https://github.com/pittorica/ui/commit/299b789561e1430b33c5d6d83a4dca1d8da8ef08))
- **slider-react:** add slider ([bebd07a](https://github.com/pittorica/ui/commit/bebd07a8fe6716587c3c9d69f1b821822ce38b8e))
- **switch-react:** add switch ([97d981d](https://github.com/pittorica/ui/commit/97d981d3fa7bf87aea4a7e2d162ee686bcf275e6))
- **table-react:** add table ([9359ff0](https://github.com/pittorica/ui/commit/9359ff096a67d1efd6b660be4333555a325e2195))
- **tabs:** add tabs react ([53410aa](https://github.com/pittorica/ui/commit/53410aa92c90a397d5d7f0e7d499b5eb80807158))
- **teaxt-area:** add text area react ([47d07d6](https://github.com/pittorica/ui/commit/47d07d677bd9a5a5c194625c8fa6645e0b0f9ccb))
- **text-field:** add text field react ([6e87d12](https://github.com/pittorica/ui/commit/6e87d1263aa7ba85690abdf90583cc87c5eaf5a9))
- **text-react:** add Text component ([c6677b0](https://github.com/pittorica/ui/commit/c6677b0c44fb963385c9fa2dc7b3e23c5fdae4ec))
- **toast:** add toast react ([68842e0](https://github.com/pittorica/ui/commit/68842e0c8c346bee12152ab203fe91dc7f506158))
- **tooltip:** add tooltip react ([af2ad12](https://github.com/pittorica/ui/commit/af2ad12ae7b7375411fad6a564f50b4915c54e06))

# [0.21.0](https://github.com/pittorica/ui/compare/v0.8.3...v0.21.0) (2026-01-25)

### Features

- add missing dependencies ([60ea60a](https://github.com/pittorica/ui/commit/60ea60aa83a2b151e7d908ab13f78a188876949a))

## [0.8.3](https://github.com/pittorica/ui/compare/v0.8.2...v0.8.3) (2026-01-25)

### Bug Fixes

- add @vanilla-extract/vite-plugin ([8081b8c](https://github.com/pittorica/ui/commit/8081b8ca6b0674430365778a246a14b77b6c92c4))

## [0.8.2](https://github.com/pittorica/ui/compare/v0.8.1...v0.8.2) (2026-01-25)

## [0.8.1](https://github.com/pittorica/ui/compare/v0.8.0...v0.8.1) (2026-01-25)

# 0.8.0 (2026-01-25)

### Bug Fixes

- build declaration files ([b46080d](https://github.com/pittorica/ui/commit/b46080d7d4e71ff3a59601471ffbdc766069f106))
- imports and types ([5032065](https://github.com/pittorica/ui/commit/5032065d13f3033d74b817cb40c828eea92a5bac))

### Features

- **background-react:** import from @pittorica/pitto ([94d300f](https://github.com/pittorica/ui/commit/94d300f2682028d02720148b3be3770bf3d6c163))
- **box-react:** import from @pittorica/pitto ([be249ff](https://github.com/pittorica/ui/commit/be249ff78da912f97e4d9cc4843e8e2c73aed980))
- **icons-react:** import from @pittorica/pitto ([019acf1](https://github.com/pittorica/ui/commit/019acf10172ae31f04b5955e76614af74684e027))
- import from @pittorico/pitto ([bcc00d3](https://github.com/pittorica/ui/commit/bcc00d3a21f055ad6fc9b188e20547a7a3629e24))
- **react:** init lib ([842dea4](https://github.com/pittorica/ui/commit/842dea4d50c725c4238a0ed5f866665933569594))
- **styles:** import styles from @pittorica/pitto ([4a39f51](https://github.com/pittorica/ui/commit/4a39f512ae13b82ef80f9540322a98e162378bff))
- **workspace:** add react-lib generator ([ad83d0f](https://github.com/pittorica/ui/commit/ad83d0f430c3d9e82fcc92f3ccdc38899fa8870b))

# 0.7.0 (2026-01-25)

### Bug Fixes

- build declaration files ([b46080d](https://github.com/pittorica/ui/commit/b46080d7d4e71ff3a59601471ffbdc766069f106))
- imports and types ([5032065](https://github.com/pittorica/ui/commit/5032065d13f3033d74b817cb40c828eea92a5bac))

### Features

- **background-react:** import from @pittorica/pitto ([94d300f](https://github.com/pittorica/ui/commit/94d300f2682028d02720148b3be3770bf3d6c163))
- **box-react:** import from @pittorica/pitto ([be249ff](https://github.com/pittorica/ui/commit/be249ff78da912f97e4d9cc4843e8e2c73aed980))
- **icons-react:** import from @pittorica/pitto ([019acf1](https://github.com/pittorica/ui/commit/019acf10172ae31f04b5955e76614af74684e027))
- import from @pittorico/pitto ([bcc00d3](https://github.com/pittorica/ui/commit/bcc00d3a21f055ad6fc9b188e20547a7a3629e24))
- **react:** init lib ([842dea4](https://github.com/pittorica/ui/commit/842dea4d50c725c4238a0ed5f866665933569594))
- **styles:** import styles from @pittorica/pitto ([4a39f51](https://github.com/pittorica/ui/commit/4a39f512ae13b82ef80f9540322a98e162378bff))
- **workspace:** add react-lib generator ([ad83d0f](https://github.com/pittorica/ui/commit/ad83d0f430c3d9e82fcc92f3ccdc38899fa8870b))
