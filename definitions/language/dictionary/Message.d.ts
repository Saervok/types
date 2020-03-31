/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    ActionAttachContainerAlreadyHasContainer = 3,
    ActionAttachContainerAttachedContainer = 4,
    ActionAttachContainerAttachingContainer = 5,
    ActionAttachContainerNothingToAttachContainerTo = 6,
    ActionConsumeItemTypeStats = 7,
    ActionCraft = 8,
    ActionCraftEfficacy = 9,
    ActionCraftEfficacyHigh = 10,
    ActionCraftEfficacyHighest = 11,
    ActionCraftEfficacyLow = 12,
    ActionCraftEfficacyLowest = 13,
    ActionCraftEfficacyMed = 14,
    ActionCraftEfficacyPercent = 15,
    ActionCraftYouLackTheRequirements = 16,
    ActionDetachContainerDetachContainer = 17,
    ActionDisassembleSalvaged = 18,
    ActionDismantleSeparated = 19,
    ActionFishingNothingBiting = 20,
    ActionFishingSlipped = 21,
    ActionFishingTooShallow = 22,
    ActionMeleeHasToBeEquipped = 23,
    ActionMeleeNothingToAttack = 24,
    ActionNavigateMoon = 25,
    ActionNavigateNotOverworld = 26,
    ActionNavigateSun = 27,
    ActionNavigateUseSextant = 28,
    ActionPetCreatureRefused = 29,
    ActionTestDepthNothingToTest = 30,
    ActionTestDepthWell = 31,
    AddedFuelToFire = 32,
    AddedFuelToTorch = 33,
    AddToQuickslot = 34,
    Advanced = 35,
    AllEquipmentUnEquipped = 36,
    AlreadyDesalinatedWaterInStill = 37,
    AlreadyFullyRefined = 38,
    AlreadyFullyRepaired = 39,
    AlreadyPreserved = 40,
    AnUnknownItem = 41,
    AppearedNotEffectiveForGathering = 42,
    AppearsToBeAberrant = 43,
    ArmorAppeared = 44,
    ArmorProtectedFromInjuryAgainst = 45,
    Attack = 46,
    AttemptedToDropAllIntoFire = 47,
    AttemptedToPlaceAllOnGround = 48,
    AttemptToSoothBurnInWater = 49,
    AttemptToTill = 50,
    Back = 51,
    BadlyBurnedLostHealth = 52,
    BarteringSkillsProvided = 53,
    BasedOnItSeems = 54,
    BeenPoisoned = 55,
    BeginSleeping = 56,
    BeginUsingRaft = 57,
    Belt = 58,
    BestForCraftingConsumables = 59,
    BestForCraftingRequirements = 60,
    BleedingHasStopped = 61,
    BleedingProfusely = 62,
    BleedingToDeathLostHealth = 63,
    Blunt = 64,
    BookBlank = 65,
    BookContains = 66,
    BookCrumbles = 67,
    BookDiagrams = 68,
    BookEmpty = 69,
    BookNothing = 70,
    BookOpen = 71,
    BookScribbles = 72,
    BothEffectiveIneffective = 73,
    BothHands = 74,
    BrokeIntoPieces = 75,
    BrokenOnImpact = 76,
    BrokenWhileFiring = 77,
    Build = 78,
    Burned = 79,
    CannotAddAnyMoreFuel = 80,
    CannotBePerformedOverWater = 81,
    CannotBePreserved = 82,
    CannotBeRefined = 83,
    CannotBeRefinedReinforcementNeeded = 84,
    CannotBeReinforced = 85,
    CannotBeRepaired = 86,
    CannotBeTamed = 87,
    CannotBuildHere = 88,
    CannotDoThatHere = 89,
    CannotDropHere = 90,
    CannotEquipThatThere = 91,
    CannotFishFor = 92,
    CannotHere = 93,
    CannotInWater = 94,
    CannotLeave = 95,
    CannotPickUpWhileLit = 96,
    CannotPickUpWithItemsInside = 97,
    CannotPlaceContainerInItself = 98,
    CannotPlaceHere = 99,
    CannotPlaceThatFromHere = 100,
    CannotPlaceThatHere = 101,
    CannotPlantHereTilled = 102,
    CannotRepairWhileLit = 103,
    CannotRestHere = 104,
    CannotSeeHere = 105,
    CannotSleepHere = 106,
    CannotStartFireHere = 107,
    CannotToTellTime = 108,
    CarryingTooMuchWeight = 109,
    CartographyDirection = 110,
    CartographyDirectionUnsure = 111,
    CartographyDistanceHighSkillExactDistance = 112,
    CartographyDistanceHighSkillFarAway = 113,
    CartographyDistanceHighSkillInRegion = 114,
    CartographyDistanceHighSkillNearby = 115,
    CartographyDistanceLowSkillNearby = 116,
    CartographyDistanceLowSkillUnsure = 117,
    CartographyDistanceMedSkillFarAway = 118,
    CartographyDistanceMedSkillNearby = 119,
    CartographyDistanceMedSkillVeryClose = 120,
    CarvedUpCorpse = 121,
    CarveWithTool = 122,
    Carving = 123,
    CastYourLine = 124,
    Category = 125,
    CaughtFish = 126,
    ChatBanCommand = 127,
    ChatBannedCommand = 128,
    ChatCommandsCommand = 129,
    ChatCommandsCommandCommand = 130,
    ChatPingCommand = 131,
    ChatPlayerMessage = 132,
    ChatPlayersCommand = 133,
    ChatServerMessage = 134,
    ChatUnbanCommand = 135,
    ChatUnknownCommand = 136,
    Chest = 137,
    ClearedBlood = 138,
    ClearMessages = 139,
    Clockwise = 140,
    CloseContainer = 141,
    CloseDoor = 142,
    CloseToBeingDestroyed = 143,
    CollectObjectWithHands = 144,
    Consumed = 145,
    Container = 146,
    Cook = 147,
    CopySelectedText = 148,
    CorpseOf = 149,
    CorpseOfNamed = 150,
    CouldNotDecipher = 151,
    Counterclockwise = 152,
    Craft = 153,
    Crafted = 154,
    Crafts = 155,
    CreatureAngered = 156,
    CreatureAppears = 157,
    CreatureAppeased = 158,
    CreatureExcrement = 159,
    CreatureHappinessHigh = 160,
    CreatureHappinessLow = 161,
    CreatureHappinessLowest = 162,
    CreatureHappinessNormal = 163,
    CreatureIdolAttractedCreature = 164,
    CreatureUntamed = 165,
    CuredYourPoison = 166,
    Cut = 167,
    DamageAppeared = 168,
    DamagedByPouring = 169,
    DayQuarter1 = 170,
    DayQuarter2 = 171,
    DayQuarter3 = 172,
    DayQuarter4 = 173,
    DealtNoDamageToYou = 174,
    DeathBy = 175,
    DeathByBleeding = 176,
    DeathByBurning = 177,
    DeathByChallengeWinner = 178,
    DeathByConsumption = 179,
    DeathByDrowning = 180,
    DeathByExhaustion = 181,
    DeathByFistByPlayer = 182,
    DeathByPoison = 183,
    DeathBySteppingOn = 184,
    DeathByTrap = 185,
    DeathByWeaponByPlayer = 186,
    Decay = 187,
    DestroyedFromUse = 188,
    DetachContainer = 189,
    Dexterity = 190,
    DexterityIncreasing = 191,
    DidNotSeemToBeHurting = 192,
    Dig = 193,
    DigAway = 194,
    Digging = 195,
    DigWithHands = 196,
    Disabled = 197,
    Disassemble = 198,
    DisassembleAction = 199,
    Disassembling = 200,
    DiscoveredCaveEntrance = 201,
    DiscoveredInTheBottle = 202,
    DiscoveredLavaPassage = 203,
    Dismantle = 204,
    DismantleAction = 205,
    DismantleLabel = 206,
    Dismantling = 207,
    DismantlingRequires = 208,
    DoNotHaveTreasureMaps = 209,
    DoNotProduceAnyResources = 210,
    DoodadAppearsDamaged = 211,
    DoodadAppearsOnVergeOfBreaking = 212,
    DoodadAppearsUnscathed = 213,
    DoodadCauseStatus = 214,
    DoodadGroupTier = 215,
    DoodadPreservation = 216,
    DoodadPreservationHigh = 217,
    DoodadPreservationLow = 218,
    DoodadPreservationModerate = 219,
    DoodadPreservationVeryHigh = 220,
    DoodadPreservationVeryLow = 221,
    DoodadShowsSignsOfWear = 222,
    DrewSurroundings = 223,
    Drink = 224,
    Drop = 225,
    DropAll = 226,
    DropAllOfSameQuality = 227,
    DroppedIntoDepths = 228,
    DroppedIntoFire = 229,
    DueToDehydration = 230,
    DueToStarvation = 231,
    DugTreasureOut = 232,
    DumpContentsOfContainerInInventory = 233,
    Durability = 234,
    DyingOfDehydration = 235,
    EarnedMilestone = 236,
    East = 237,
    EastNortheast = 238,
    EastSoutheast = 239,
    Effective = 240,
    Enabled = 241,
    Enchant = 242,
    EquipmentPreventedStatusEffects = 243,
    EquipTo = 244,
    ErrorHasOccured = 245,
    Expert = 246,
    ExtinguishedFire = 247,
    ExtinguishedLightSource = 248,
    FailedToAddFuelToTorch = 249,
    FailedToCatchFish = 250,
    FailedToCauseDamage = 251,
    FailedToCauseYouDamage = 252,
    FailedToDrawMap = 253,
    FailedToEnchant = 254,
    FailedToIgniteTorch = 255,
    FailedToPickLock = 256,
    FailedToPlant = 257,
    FailedToPreserve = 258,
    FailedToRefine = 259,
    FailedToReinforce = 260,
    FailedToRepair = 261,
    FailedToStartFire = 262,
    FailedToTame = 263,
    FailedToTransmogrify = 264,
    Feet = 265,
    FeltBurningPainLostHealth = 266,
    FewMinutes = 267,
    Filled = 268,
    FilledFrom = 269,
    Fire = 270,
    FireAroundYouIsWarm = 271,
    FiredIntoObstacle = 272,
    FireOverflowed = 273,
    FireOverflowedFireElemental = 274,
    FireSource = 275,
    FishingWithNoBait = 276,
    FreshWater = 277,
    FromTheStill = 278,
    Fuel = 279,
    FullyDecodedMap = 280,
    GainedHealth = 281,
    GainedHunger = 282,
    GainedStamina = 283,
    GainedThirst = 284,
    GameHasBeenSavedIsTakingUpMB = 285,
    Gather = 286,
    GatherDestroy = 287,
    Gathering = 288,
    GatherWithHands = 289,
    GhostNoActions = 290,
    GhostOf = 291,
    GoatHasNoMilk = 292,
    GrabAll = 293,
    Group = 294,
    HackAway = 295,
    HandProtectionPreventedInjury = 296,
    Hands = 297,
    HandsNotEffectiveForDigging = 298,
    Harvest = 299,
    Harvesting = 300,
    HarvestWithHands = 301,
    HasBeenHurtByATrap = 302,
    HasDecayed = 303,
    HasHitYouForDamage = 304,
    HasNoEffect = 305,
    HasSetTrapOffNoDamage = 306,
    HasSplit = 307,
    Head = 308,
    Held = 309,
    Help = 310,
    HelpGrow = 311,
    Here = 312,
    Hints = 313,
    HintsDisabled = 314,
    HintsEnabled = 315,
    Hitch = 316,
    HitchAttempt = 317,
    HitchCreature = 318,
    HitchDisabled = 319,
    HitchInUse = 320,
    HitForDamage = 321,
    HitYouForDamage = 322,
    Hour = 323,
    Hours = 324,
    HurtHandsHittingWithoutWeapons = 325,
    HurtHandsWithNoTool = 326,
    Ignite = 327,
    IgnitedTorch = 328,
    Ineffective = 329,
    InjuredFromTrap = 330,
    InNeedOfRepair = 331,
    Intermediate = 332,
    Inventory = 333,
    IsInTheWayOfPickingUp = 334,
    It = 335,
    ItAlsoReveals = 336,
    ItAlsoSeems = 337,
    ItContains = 338,
    ItemFromWater = 339,
    ItsWeightCapacity = 340,
    JoinedAServer = 341,
    Jump = 342,
    Killed = 343,
    KnowledgeHasIncreased = 344,
    LabelAdditionalRequirements = 345,
    LabelAttackFromTactics = 346,
    LabelBase = 347,
    LabelCanIncrease = 348,
    LabelCraftingReputation = 349,
    LabelCraftingRequires = 350,
    LabelCraftingSkillReputation = 351,
    LabelDecay = 352,
    LabelDefense = 353,
    LabelDismantlingRequires = 354,
    LabelDurability = 355,
    LabelEquip = 356,
    LabelGrouping = 357,
    LabelHave = 358,
    LabelLeftHandAttack = 359,
    LabelLevel = 360,
    LabelLightSourceWhenLit = 361,
    LabelOnCure = 362,
    LabelOnDrink = 363,
    LabelOnEat = 364,
    LabelOnEquip = 365,
    LabelOnHeal = 366,
    LabelOnOtherHeal = 367,
    LabelPreservationRate = 368,
    LabelProtected = 369,
    LabelRange = 370,
    LabelRanged = 371,
    LabelRangedAttack = 372,
    LabelRangedDamage = 373,
    LabelReputationImpact = 374,
    LabelResists = 375,
    LabelRightHandAttack = 376,
    LabelSkill = 377,
    LabelStokeFireStrength = 378,
    LabelThrowDamageType = 379,
    LabelTrapDamage = 380,
    LabelUse = 381,
    LabelUses = 382,
    LabelVulnerabilities = 383,
    LabelWeight = 384,
    LabelWeightCapacity = 385,
    LabelWeightReduction = 386,
    LabelWorth = 387,
    LastPlaceYouLeftOff = 388,
    LearnedHowToCreate = 389,
    LeftHand = 390,
    LeftHandEquip = 391,
    LegendaryItemDamage = 392,
    Legs = 393,
    LikelyFailures = 394,
    Limited = 395,
    LostHealth = 396,
    LostHunger = 397,
    LostStamina = 398,
    LostThirst = 399,
    MapNotOfThisArea = 400,
    MaterialsDestroyed = 401,
    MerchantAlreadyTradedItem = 402,
    MessageOfTheDay = 403,
    Metabolism = 404,
    MetabolismSlowed = 405,
    Milk = 406,
    Milking = 407,
    MissedWith = 408,
    MissedYouWith = 409,
    MoreInformation = 410,
    MoveAllOfSameQualityToFacingContainer = 411,
    MoveAllOfSameQualityToInventory = 412,
    MoveAllOfSameQualityToLastOpenedContainer = 413,
    MoveAllOfSameQualityToOpenedContainer = 414,
    MoveAllToFacingContainer = 415,
    MoveAllToInventory = 416,
    MoveAllToLastOpenedContainer = 417,
    MoveAllToOpenedContainer = 418,
    MovedItem = 419,
    MoveOverTrapButDoNotSetOff = 420,
    MoveToFacingContainer = 421,
    MoveToInventory = 422,
    MoveToLastOpenedContainer = 423,
    MoveToOpenedContainer = 424,
    MultiplayerGamePaused = 425,
    MultiplayerGameResumed = 426,
    MultiplayerPlayerConnected = 427,
    MultiplayerPlayerDied = 428,
    MultiplayerPlayerDisconnected = 429,
    MultiplayerPlayerJoined = 430,
    MustBeEquippedToIgnite = 431,
    Mysteriously = 432,
    Name = 433,
    NearlyBurnedEquipmentProtectedYou = 434,
    Neck = 435,
    NeedAShovelToDigTreasure = 436,
    NeedFishingNetForTreasure = 437,
    NeedFreeHandToShoot = 438,
    NeedToEquipToShoot = 439,
    NeedToStartTravelsOutside = 440,
    NeedWaterForRaft = 441,
    Negatively = 442,
    NightQuarter1 = 443,
    NightQuarter2 = 444,
    NightQuarter3 = 445,
    NightQuarter4 = 446,
    No = 447,
    NoAmmunitionForThatWeapon = 448,
    NoBlackPowderToFireWeapon = 449,
    NoFireToStokeWith = 450,
    NoFishAtLocation = 451,
    NoGroundWater = 452,
    NoInkToDrawMap = 453,
    NoKindlingOrFuelItemsToStartFire = 454,
    NoKindlingToStartFire = 455,
    NoLongerFeelPainOfBeingBurned = 456,
    NoLongerHostile = 457,
    NoMoreRoomInContainer = 458,
    NoReturnWithoutCompletingChallenges = 459,
    NoRoomForImprovement = 460,
    NoRoomToDrop = 461,
    North = 462,
    Northeast = 463,
    NorthNortheast = 464,
    NorthNorthwest = 465,
    Northwest = 466,
    NotAvailable = 467,
    NotEnoughPurifiedWaterYet = 468,
    NotEnoughTreasureToReturn = 469,
    NotFacingCreatureToOfferThisTo = 470,
    NotFacingLockedObject = 471,
    NotFacingOtherToHeal = 472,
    NotFacingValidItem = 473,
    NothingHereToCarve = 474,
    NothingHereToFill = 475,
    NothingHereToGrasp = 476,
    NothingToGetFromThis = 477,
    NothingToHarvestFromThisGather = 478,
    NothingToSmother = 479,
    NothingUsefulToHarvestYet = 480,
    NoTinderToStartFire = 481,
    NotInRangeOfTreasure = 482,
    NotSuitableToPlant = 483,
    NoWaterInStill = 484,
    NPCStartingDialog1 = 485,
    NPCStartingDialog2 = 486,
    NPCStartingDialog3 = 487,
    NPCStartingDialog4 = 488,
    NPCWelcome = 489,
    NPCWelcomeCredit = 490,
    NumberEight = 491,
    NumberFive = 492,
    NumberFour = 493,
    NumberNine = 494,
    NumberOne = 495,
    NumberSeven = 496,
    NumberSix = 497,
    NumberTen = 498,
    NumberThree = 499,
    NumberTwo = 500,
    ObjectIsLocked = 501,
    ObjectIsLockedAttemptToBreakIt = 502,
    Offer = 503,
    OfferAberrantFail = 504,
    OfferAberrantFailButTamed = 505,
    OpenDoor = 506,
    OverEatingLostStamina = 507,
    OverHydratingLostStamina = 508,
    Pack = 509,
    PaperTurnedToMush = 510,
    ParryTheBlow = 511,
    PartiallyDecodedMap = 512,
    PenultimateAnd = 513,
    Pet = 514,
    PetCreature = 515,
    PickAway = 516,
    PickupAllItems = 517,
    PickupItem = 518,
    Piercing = 519,
    Place = 520,
    PlacedOnGround = 521,
    Plant = 522,
    PlantCouldBeHarvested = 523,
    PlantedInGround = 524,
    PlantGatheringWillDestroy = 525,
    PlantHasResourcesToGather = 526,
    PlantHasResourcesToHarvest = 527,
    PlantHighlyFertile = 528,
    Planting = 529,
    PlantIsBare = 530,
    PlantIsFertile = 531,
    PlantIsInStage = 532,
    PlantIsNotFertile = 533,
    PlantNotReadyToHarvest = 534,
    PlantReadyToGather = 535,
    PlantReadyToGatherNotMaximal = 536,
    PlantReadyToHarvest = 537,
    PlantReadyToHarvestNotMaximal = 538,
    Player = 539,
    PlayerHasCompletedChallengeRequirement = 540,
    PlayerHasWonChallenge = 541,
    Poisoned = 542,
    PoisonedLostHealth = 543,
    PoisonWorkedItsCourse = 544,
    Positively = 545,
    PouredOut = 546,
    PouredOutOnYourself = 547,
    PouredWaterIntoStill = 548,
    PourHarmedPlant = 549,
    PourHealedPlant = 550,
    PourHealedPlantFully = 551,
    PourHealedPlantPartially = 552,
    PourIncreasedFertility = 553,
    Prepared = 554,
    Preserve = 555,
    PreservedFood = 556,
    PurifiedWaterInStill = 557,
    Quality = 558,
    Recent = 559,
    ReduceLength = 560,
    Refine = 561,
    RefusedToBeTamed = 562,
    Reinforce = 563,
    Release = 564,
    RemoveFromQuickslot = 565,
    Repair = 566,
    ReputationDecreased = 567,
    ReputationIncreased = 568,
    ReputationUpdate = 569,
    RequiredForDisassembleLabel = 570,
    RequiredForDisassembly = 571,
    RequiresFireToBeLit = 572,
    RequiresYouFacingFireSource = 573,
    RequiresYouToBeAround = 574,
    Resistant = 575,
    ResistOrVuln = 576,
    ResistOrVulnAll = 577,
    Rest = 578,
    Rested = 579,
    Resting = 580,
    RestingOnGroundNotEffective = 581,
    RestInterrupted = 582,
    RestInterruptedDamage = 583,
    RestInterruptedLoudNoise = 584,
    RestInterruptedPain = 585,
    RestInterruptedStirring = 586,
    RestLongTime = 587,
    RestModerateTime = 588,
    RestOnGround = 589,
    RestShortTime = 590,
    RestTime = 591,
    ReturnedToCivilization = 592,
    ReturningToCivilizationSetOffAgain = 593,
    ReturnsToLife = 594,
    Reveals = 595,
    RevealsEntityAppearsHurt = 596,
    RevealsEntityAppearsUnharmed = 597,
    RevealsEntityAppearsVeryHurt = 598,
    RevealsEntityIsAtPercentHealth = 599,
    RevealsEntityIsInjured = 600,
    RevealsEntityIsMostlyUninjured = 601,
    RevealsEntityIsOnTheVergeOfDeath = 602,
    RevealsEntityIsSeverelyInjured = 603,
    RevealsEntitySeemsInjured = 604,
    RevealsEntitySeemsUninjured = 605,
    RevealsNumberOfResistancesAndVulnerabilities = 606,
    RevealsResistancesAndVulnerabilities = 607,
    RevealsSomeResistancesAndVulnerabilities = 608,
    Reverse = 609,
    RightHand = 610,
    RightHandEquip = 611,
    ScrollMaster = 612,
    ScrollProvidedNoUsefulInsight = 613,
    Seawater = 614,
    SeemsToHaveDrawnEnergy = 615,
    SetTrapOffButNoDamage = 616,
    SetUp = 617,
    ShadowInTheWater = 618,
    Simple = 619,
    Skill = 620,
    SkillHasRaised = 621,
    Skills = 622,
    Slashing = 623,
    Sleep = 624,
    Sleeping = 625,
    Slept = 626,
    SlitherSuckerConstricts = 627,
    SlitherSuckerJumpedOnHead = 628,
    SomethingInTheWayOf = 629,
    SomethingInTheWayOfCarveFirst = 630,
    SomethingInTheWayOfFire = 631,
    SomethingInTheWayOfFishing = 632,
    SomethingInTheWayOfPerforming = 633,
    SomethingInTheWayOfPlacing = 634,
    SomethingInTheWayOfPlanting = 635,
    SomethingInWayOfClosingDoor = 636,
    SoothedTheirBurnInjuries = 637,
    SoothedYourBurnInjuries = 638,
    Sort = 639,
    SortedByBestCraftingConsumables = 640,
    SortedByBestCraftingRequirements = 641,
    SortedByCategory = 642,
    SortedByDecay = 643,
    SortedByDurability = 644,
    SortedByGroup = 645,
    SortedByName = 646,
    SortedByQuality = 647,
    SortedByRecent = 648,
    SortedBySkill = 649,
    SortedByUnlockedTime = 650,
    SortedByWeight = 651,
    South = 652,
    Southeast = 653,
    SouthSoutheast = 654,
    SouthSouthwest = 655,
    Southwest = 656,
    StaminaIsFull = 657,
    StartedFire = 658,
    StartTravelInWater = 659,
    StarvingToDeath = 660,
    SteppingOnHasInjuredYouForDamage = 661,
    StillHasNoWaterToPurify = 662,
    StirredUpClawWorm = 663,
    StirredUpCreature = 664,
    StoppedYourBleeding = 665,
    StopUsingRaft = 666,
    Strength = 667,
    StrengthIncreasing = 668,
    SummonedGuardianByLockpicking = 669,
    SummonedGuardiansByDiggingTreasure = 670,
    SunNotBrightEnoughToStartFire = 671,
    TakenFromGroundBecomeTamed = 672,
    Tame = 673,
    TamedCreature = 674,
    TeleportBlocked = 675,
    Teleported = 676,
    ThanksBuying = 677,
    ThanksSelling = 678,
    TheCreature = 679,
    TheirFist = 680,
    ThePlant = 681,
    ThereIsNoContainerOnTheStill = 682,
    ThereIsNoSunToStartFire = 683,
    ThereIsNothingToMilk = 684,
    ThisCannotBeMilked = 685,
    Throw = 686,
    ThrownIntoDepths = 687,
    ThrownIntoObstacle = 688,
    Tier = 689,
    TierGroup = 690,
    Till = 691,
    Tilling = 692,
    TimeIs = 693,
    TimeIsDawn = 694,
    TimeIsDaytime = 695,
    TimeIsDusk = 696,
    TimeIsNighttime = 697,
    TimeIsSunrise = 698,
    TimeIsSunset = 699,
    ToDamageAChest = 700,
    ToFight = 701,
    TooDamaged = 702,
    TooExhaustedToJump = 703,
    TradeBarterCreditForItem = 704,
    TradeItemForBarterCredit = 705,
    TradingWith = 706,
    TrampledFire = 707,
    TrampledIntoGround = 708,
    TrampleIntoGround = 709,
    Trampling = 710,
    Transmogrified = 711,
    Transmogrify = 712,
    TrapMissed = 713,
    TrapStoppedYou = 714,
    TravelToFarOffLands = 715,
    TreasureIsBlocked = 716,
    True = 717,
    UnEquip = 718,
    UnEquipAll = 719,
    Unhitch = 720,
    UnhitchCreature = 721,
    Unknown = 722,
    UnknownItem = 723,
    Unlimited = 724,
    UnlockedChest = 725,
    UnlockedTime = 726,
    UnpurifiedFreshWater = 727,
    UnpurifiedWaterInStill = 728,
    UsingBareHands = 729,
    Vulnerable = 730,
    WaitUntilFireCooledToGetWater = 731,
    Water = 732,
    WaterGathering = 733,
    WaterPutOutFire = 734,
    Weight = 735,
    WeightCapacity = 736,
    WellIsDry = 737,
    WellIsFull = 738,
    West = 739,
    WestNorthwest = 740,
    WestSouthwest = 741,
    WildGoatRefusedToBeMilked = 742,
    WillNotTrade = 743,
    With = 744,
    WithYouSee = 745,
    WorkingYourselfIntoExhaustion = 746,
    WorkingYourselfIntoExhaustionAndDrowning = 747,
    You = 748,
    YouApplied = 749,
    YouAte = 750,
    YouBeginResting = 751,
    YouCannotDoThatYet = 752,
    YouCooledLava = 753,
    YouCrafted = 754,
    YouDied = 755,
    YouDrank = 756,
    YouDropTheTorch = 757,
    YouEnchant = 758,
    YouEnchantMutate = 759,
    YouEquip = 760,
    YouFailedTo = 761,
    YouFailedToExtinguishedFireFully = 762,
    YouFailedToHeal = 763,
    YouFailedToHealOther = 764,
    YouFire = 765,
    YouGathered = 766,
    YouGatheredAndDropped = 767,
    YouHardenedCooledLava = 768,
    YouHarvested = 769,
    YouHarvestedAndDropped = 770,
    YouHaveAlreadyLearned = 771,
    YouHaveDied = 772,
    YouHaveEnabledDisabled = 773,
    YouHaveHealedOther = 774,
    YouHaveKilled = 775,
    YouHaveReleased = 776,
    YouHaveTamed = 777,
    YouNeedMoreCredit = 778,
    YouNoticeBecomeEnraged = 779,
    YouNoticeDying = 780,
    YouNoticeFertilityDecreasing = 781,
    YouNoticeFertilityIncreasing = 782,
    YouNoticeGrowing = 783,
    YouNoticeLavaCooling = 784,
    YouNoticeLavaHardening = 785,
    YouNoticePerish = 786,
    YouNoticeStumbleInjureItself = 787,
    YouNoticeTakeFromGround = 788,
    YouNoticeWoundsClosing = 789,
    YouNoticeZombieHorde = 790,
    YouOfferedToCreature = 791,
    YouOpen = 792,
    YouPacked = 793,
    YouPickedUp = 794,
    YouRefine = 795,
    YouReinforce = 796,
    YouRepair = 797,
    YourFist = 798,
    YourHands = 799,
    YourHighSkill = 800,
    YourInventory = 801,
    YourLowSkill = 802,
    YourModerateSkill = 803,
    YourRubbingNoEffect = 804,
    YouRub = 805,
    YouSee = 806,
    YouSeeALivingMushroomSpore = 807,
    YouSeeAnAberrant = 808,
    YouSeeASkeletonCollapse = 809,
    YouSeeASlimeCombine = 810,
    YouSeeAZombieBleeding = 811,
    YouSeeDrop = 812,
    YouSeeEngulfFire = 813,
    YouSeeFireSpread = 814,
    YouSeeHelpingPlant = 815,
    YouSeeLay = 816,
    YouSeeLayingTrap = 817,
    YouSeeSpewLava = 818,
    YouSeeSpitAcid = 819,
    YouSeeSpringForth = 820,
    YouSeeSummon = 821,
    YouSeeSwampFlood = 822,
    YouSeeTrampling = 823,
    YouSetTheTrapOff = 824,
    YouStokeTheFireElemental = 825,
    YouThrew = 826,
    YouTilled = 827,
    YouUnequip = 828,
    YouUsed = 829
}
export default Message;
