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
/**
 * Ui messages that are on elements that don't change
 */
declare enum UiTranslation {
    GameActionGather = 0,
    GameDialogCraftingName = 1,
    GameDialogMessagesName = 2,
    GameDialogMessagesOptionTimestamp = 3,
    GameDialogMessagesOptionShowSendButton = 4,
    GameDialogMessagesOptionShowOptionsButton = 5,
    GameDialogMessagesOptionMaxMessages = 6,
    GameDialogMessagesEditFiltersName = 7,
    GameDialogMessagesEditFiltersLabelName = 8,
    GameDialogMessagesEditFiltersButtonDelete = 9,
    GameDialogMessagesEditFiltersButtonSave = 10,
    GameDialogMessagesEditFiltersButtonReset = 11,
    GameDialogMessagesEditFiltersButtonNew = 12,
    GameDialogNotesName = 13,
    GameDialogNotesNoteTime = 14,
    GameDialogNotesNoteNumber = 15,
    GameDialogNotesNoteLockedTitle = 16,
    GameDialogNotesNoteLockedDescription = 17,
    GameDialogNotesLinkId = 18,
    GameDialogNotesLinkLearnMore = 19,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 20,
    GameDialogQuickSettingsName = 21,
    GameDialogMilestonesName = 22,
    GameDialogMilestonesInvisibleMilestone = 23,
    GameDialogMilestonesProgress = 24,
    GameDialogMilestonesProgressHidden = 25,
    GameDialogMilestonesMilestone = 26,
    GameDialogMilestonesTooltipHidden = 27,
    GameDialogMilestonesTooltipInvisible = 28,
    GameDialogMilestonesSortName = 29,
    GameDialogMilestonesSortProgress = 30,
    GameDialogSkillsName = 31,
    GameDialogSkillsSkill = 32,
    GameDialogSkillsTooltipReputationImpact = 33,
    GameDialogSkillsTooltipCanIncrease = 34,
    GameDialogSkillsSortName = 35,
    GameDialogSkillsSortLevel = 36,
    GameDialogBookName = 37,
    GameDialogMapName = 38,
    GameDialogMapTooltipDecode = 39,
    GameDialogQuestsName = 40,
    GameDialogQuestsLink = 41,
    GameDialogQuestsChildQuests = 42,
    GameDialogQuestsRequirements = 43,
    GameDialogQuestsActiveQuests = 44,
    GameDialogQuestsCompletedQuests = 45,
    GameDialogQuestsCompleteQuest = 46,
    GameTooltipShowMoreInformation = 47,
    GameTooltipLegendaryMaxWeightLabel = 48,
    GameStatsPercentage = 49,
    GameStatsStatAttack = 50,
    GameStatsStatGeneric = 51,
    GameStatsStatGenericWithMax = 52,
    GameStatsStatbar = 53,
    GameStatsStatHealthTooltip = 54,
    GameStatsStatStaminaTooltip = 55,
    GameStatsStatHungerTooltip = 56,
    GameStatsStatThirstTooltip = 57,
    GameStatsStatHealthStatusWarning = 58,
    GameStatsStatStaminaStatusWarning = 59,
    GameStatsStatHungerStatusWarning = 60,
    GameStatsStatThirstStatusWarning = 61,
    GameStatsStatWeightStatusWarning = 62,
    GameStatsStatStaminaStatusBad = 63,
    GameStatsStatHungerStatusBad = 64,
    GameStatsStatThirstStatusBad = 65,
    GameStatsStatWeightStatusBad = 66,
    GameStatsStatReputationTooltipDifficulty = 67,
    GameStatsStatReputationTooltipDifficultyEasy = 68,
    GameStatsStatReputationTooltipDifficultyHard = 69,
    GameStatsStatReputationTooltipDifficultyInsane = 70,
    GameStatsStatReputationTooltipDifficultyMedium = 71,
    GameStatsStatReputationTooltipDifficultySimple = 72,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 73,
    GameStatsStatReputationTooltipDifficultyVeryHard = 74,
    GameStatsStatReputationTooltipBenignity = 75,
    GameStatsStatReputationTooltipMalignity = 76,
    GameStatsStatReputationTooltipScore = 77,
    GameStatsStatReputationTooltipTurn = 78,
    GameStatsStatReputationTooltipTicks = 79,
    GameStatsStatWeightTooltip = 80,
    GameStatsStatAttackTooltipTactics = 81,
    GameStatsStatAttackTooltipLeftHand = 82,
    GameStatsStatAttackTooltipRightHand = 83,
    GameStatsStatDefenseTooltipBase = 84,
    GameStatsStatDefenseTooltipBlunt = 85,
    GameStatsStatDefenseTooltipParrying = 86,
    GameStatsStatDefenseTooltipFire = 87,
    GameStatsStatDefenseTooltipPiercing = 88,
    GameStatsStatDefenseTooltipSlashing = 89,
    GameItemBarterCredit = 90,
    GameItemBarterCreditTrade = 91,
    GameMenuBarButtonTooltipBindable = 92,
    GameMenuBarButtonTooltipMenu = 93,
    GameMenuBarButtonTooltipSave = 94,
    GameMenuBarButtonTooltipSaveSize = 95,
    GameMenuBarButtonTooltipSaveTurnsAgo = 96,
    GameMenuBarButtonTooltipSaveLastTime = 97,
    GameMenuBarButtonTooltipNotes = 98,
    GameMenuBarButtonTooltipMilestones = 99,
    GameMenuBarButtonTooltipMilestonesDisabled = 100,
    GameMenuBarButtonTooltipMessages = 101,
    GameMenuBarButtonTooltipHelp = 102,
    GameMenuBarButtonTooltipQuickSettings = 103,
    GameMenuBarButtonTooltipActions = 104,
    GameMenuBarButtonTooltipInventory = 105,
    GameMenuBarButtonTooltipCrafting = 106,
    GameMenuBarButtonTooltipEquipment = 107,
    GameMenuBarButtonTooltipSkills = 108,
    GameMenuBarButtonTooltipQuests = 109,
    GameMenuBarButtonTooltipQuestsDisabled = 110,
    GameMessagesButtonSend = 111,
    GameMessagesContextMenuShowAsDialog = 112,
    GameMessagesContextMenuClear = 113,
    GameMessagesContextMenuCopy = 114,
    GameMessagesContextMenuExport = 115,
    GameMessagesFilter = 116,
    GameMessagesFiltersEdit = 117,
    GameMessagesNewNote = 118,
    GameMessagesTurn = 119,
    GameMessagesDedicatedServerBackup = 120,
    GameMessagesDedicatedServerBackupLimitReached = 121,
    MenuAboutTitle = 122,
    MenuAboutDescription = 123,
    MenuAboutGameDescription = 124,
    MenuAboutSectionTeam = 125,
    MenuAboutTeamMemberResponsibilities = 126,
    MenuAboutTeamMemberName = 127,
    MenuAboutTeamMemberNickname = 128,
    MenuAboutSectionContributors = 129,
    MenuAboutSectionSpecialThanks = 130,
    MenuAboutTextSpecialThanksTestorsAndDonators = 131,
    MenuAboutSectionLibraries = 132,
    MenuAboutSectionLibrariesDescription = 133,
    MenuBindings = 134,
    MenuBindingsDescription = 135,
    MenuChangelogTitle = 136,
    MenuChangelogDescription = 137,
    MenuChangelogHeadingFailedLoad = 138,
    MenuChangelogHeadingChangeCount = 139,
    MenuCharacterCreationButtonRandomizeName = 140,
    MenuCharacterCreationButtonExportTooltip = 141,
    MenuCharacterCreationButtonImportTooltip = 142,
    MenuCharacterCreationButtonStartGame = 143,
    MenuCharacterCreationButtonJoinGame = 144,
    MenuCharacterCreationDescription = 145,
    MenuCharacterCreationHeadingHairColor = 146,
    MenuCharacterCreationHeadingHairStyle = 147,
    MenuCharacterCreationHeadingSkinTone = 148,
    MenuCharacterCreationLabelName = 149,
    MenuCharacterCreationTitle = 150,
    MenuCharacterCreationButtonRotateLeftTooltip = 151,
    MenuCharacterCreationButtonRotateRightTooltip = 152,
    MenuCharacterCreationButtonRandomizeTooltip = 153,
    MenuCharacterSelectionButtonNewCharacter = 154,
    MenuCharacterSelectionDescription = 155,
    MenuCharacterSelectionHeadingNoCharacters = 156,
    MenuCharacterSelectionTitle = 157,
    MenuCharacterSelectionLabelLastUse = 158,
    MenuCharacterSelectionLabelUseCount = 159,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 160,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 161,
    MenuMultiplayerDescription = 162,
    MenuMultiplayerTitle = 163,
    MenuMultiplayerButtonJoinById = 164,
    MenuMultiplayerServerLabelReputation = 165,
    MenuMultiplayerServerLabelDays = 166,
    MenuMultiplayerButtonNewGame = 167,
    MenuMultiplayerButtonLoadGame = 168,
    MenuMultiplayerServerTooltipPVP = 169,
    MenuMultiplayerServerTooltipModsLabel = 170,
    MenuMultiplayerServerTooltipFriendsLabel = 171,
    MenuMultiplayerServerPlayers = 172,
    MenuMultiplayerServerLobbyType = 173,
    MenuMultiplayerServerRegion = 174,
    MenuMultiplayerServerHost = 175,
    MenuMultiplayerServerVersion = 176,
    MenuMultiplayerServerVersionUnknown = 177,
    MenuMultiplayerServerDedicated = 178,
    MenuMultiplayerHeadingPlayersOnline = 179,
    MenuMultiplayerServerModUnableToLoad = 180,
    MenuGameEndTitleDead = 181,
    MenuGameEndTitleWon = 182,
    MenuGameEndShareFacebook = 183,
    MenuGameEndShareTwitter = 184,
    MenuGameEndContinueAsGhost = 185,
    MenuGameEndReturnToIsland = 186,
    MenuGameEndExitToMenu = 187,
    MenuHelpTitle = 188,
    MenuHelpDescription = 189,
    MenuHelpLabelSearch = 190,
    MenuHighscoresTitle = 191,
    MenuHighscoresDescription = 192,
    MenuHighscoresDifficultyFilterAll = 193,
    MenuHighscoresHighscoreLabelDifficulty = 194,
    MenuHighscoresHighscoreLabelTurns = 195,
    MenuHighscoresHighscoreLabelScore = 196,
    MenuHighscoresHighscoreLabelPlace = 197,
    MenuHighscoresHighscoreLabelDate = 198,
    MenuHighscoresHighscoreLabelDeathBy = 199,
    MenuHighscoresHighscoreTitle = 200,
    MenuHighscoresCharacterNameUnknown = 201,
    MenuHighscoresHighscoreReplayWithSettings = 202,
    MenuLoadGameButtonNewGame = 203,
    MenuLoadGameButtonNewGameButtonImportTooltip = 204,
    MenuLoadGameDescription = 205,
    MenuLoadGameSaveButtonDeleteTooltip = 206,
    MenuLoadGameSaveButtonEditNameTooltip = 207,
    MenuLoadGameSaveButtonExportTooltip = 208,
    MenuLoadGameSaveTooltipLabelCreatedTime = 209,
    MenuLoadGameSaveTooltipLabelSaveTime = 210,
    MenuLoadGameSaveTooltipLabelGameMode = 211,
    MenuLoadGameSaveTooltipLabelScore = 212,
    MenuLoadGameSaveTooltipLabelSeed = 213,
    MenuLoadGameSaveTooltipLabelTurns = 214,
    MenuLoadGameSaveTooltipLabelMods = 215,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 216,
    MenuLoadGameSaveTooltipMod = 217,
    MenuLoadGameSlotsRemaining = 218,
    MenuLoadGameSaveGame = 219,
    MenuLoadGameSaveGameDescription = 220,
    MenuLoadGameTitle = 221,
    MenuMainButtonAbout = 222,
    MenuMainButtonChangelog = 223,
    MenuMainButtonContinueGame = 224,
    MenuMainButtonMultiplayer = 225,
    MenuMainButtonHighscores = 226,
    MenuMainButtonLoadGame = 227,
    MenuMainButtonMods = 228,
    MenuMainButtonNewGame = 229,
    MenuMainButtonNews = 230,
    MenuMainButtonOptions = 231,
    MenuMainButtonQuitGame = 232,
    MenuModsButtonModdingGuide = 233,
    MenuModsButtonOpenFolder = 234,
    MenuModsButtonOpenWorkshop = 235,
    MenuModsDescription = 236,
    MenuModsTitle = 237,
    MenuModsTooltipLabelAuthor = 238,
    MenuModsTooltipLabelTags = 239,
    MenuModsTooltipLabelDependencies = 240,
    MenuModsTooltipLabelProvides = 241,
    MenuModsTooltipLabelVersion = 242,
    MenuModsTooltipLabelDescription = 243,
    MenuModsTooltipLabelInstallDate = 244,
    MenuModsTooltipLabelCreatedDate = 245,
    MenuModsTooltipLabelLastUpdatedDate = 246,
    MenuModsTooltipMultiplayerCompatibility = 247,
    MenuModsTooltipPreventsMilestoneUnlocks = 248,
    MenuModsTooltipModOptions = 249,
    MenuModsTooltipPublishMod = 250,
    MenuModsTooltipUninstallMod = 251,
    MenuModsTooltipViewInSteamWorkshop = 252,
    MenuModsButtonEditInternalMods = 253,
    MenuModsSectionHeading = 254,
    MenuModsSubmenuEditInternalModsTitle = 255,
    MenuModsSubmenuEditInternalModsDescription = 256,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 257,
    MenuNewGameButtonNext = 258,
    MenuNewGameButtonStartServer = 259,
    MenuNewGameDescription = 260,
    MenuNewGameLabelEditName = 261,
    MenuNewGameLabelEditSeed = 262,
    MenuNewGamePlaceholderEditSeed = 263,
    MenuNewGameTitle = 264,
    MenuNewGameChoiceDifficulty = 265,
    MenuNewGameChoiceSingleplayer = 266,
    MenuNewGameChoiceSingleplayerDescription = 267,
    MenuNewGameChoiceMultiplayer = 268,
    MenuNewGameChoiceMultiplayerDescription = 269,
    MenuNewGameChoiceTurnModeManual = 270,
    MenuNewGameChoiceTurnModeManualDescription = 271,
    MenuNewGameChoiceTurnModeRealTime = 272,
    MenuNewGameChoiceTurnModeRealTimeDescription = 273,
    MenuNewGameChoiceTurnModeSimulated = 274,
    MenuNewGameChoiceTurnModeSimulatedDescription = 275,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 276,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 277,
    MenuNewGameChoiceDifficultyChallengeDaily = 278,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 279,
    MenuNewGameButtonMilestones = 280,
    MenuNewGameButtonMilestonesDescription = 281,
    MenuNewGameTabGameMode = 282,
    MenuNewGameTabMultiplayer = 283,
    MenuNewGameTabGameplayModifiers = 284,
    MenuNewGameHeadingGameMode = 285,
    MenuNewGameHeadingMultiplayer = 286,
    MenuNewGameHeadingGameplayModifiers = 287,
    MenuNewGameChoiceClientsInheritHostModifiers = 288,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 289,
    MenuNewGameChoiceCustomModifiers = 290,
    MenuNewGameChoiceCustomModifiersDescription = 291,
    MenuMilestoneModifiersTitle = 292,
    MenuMilestoneModifiersDescription = 293,
    MenuCustomGameOptionsTitle = 294,
    MenuCustomGameOptionsDescription = 295,
    MenuCustomGameOptionsRespawnOnDeath = 296,
    MenuCustomGameOptionsRespawnOnDeathDescription = 297,
    MenuCustomGameOptionsUseUnlockedRecipes = 298,
    MenuCustomGameOptionsCreaturesPeaceful = 299,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 300,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 301,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 302,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 303,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 304,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 305,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 306,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 307,
    MenuCustomGameOptionsCreaturesAllowSpawning = 308,
    MenuCustomGameOptionsCreatureNone = 309,
    MenuCustomGameOptionsCreatureConfigure = 310,
    MenuCustomGameOptionsBenignityInitial = 311,
    MenuCustomGameOptionsBenignityMultiplier = 312,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 313,
    MenuCustomGameOptionsMalignityInitial = 314,
    MenuCustomGameOptionsMalignityMultiplier = 315,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 316,
    MenuCustomGameOptionsStatMultiplier = 317,
    MenuCustomGameOptionsStatMultiplierTooltip = 318,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 319,
    MenuCustomGameOptionsHeadingGeneral = 320,
    MenuCustomGameOptionsHeadingTime = 321,
    MenuCustomGameOptionsHeadingStats = 322,
    MenuCustomGameOptionsHeadingReputation = 323,
    MenuCustomGameOptionsHeadingInventory = 324,
    MenuCustomGameOptionsHeadingCreatures = 325,
    MenuCustomGameOptionsHeadingSkills = 326,
    MenuCustomGameOptionsHeadingStatusEffects = 327,
    MenuCustomGameOptionsEternalNight = 328,
    MenuCustomGameOptionsEternalNightDescription = 329,
    MenuCustomGameOptionsEternalDay = 330,
    MenuCustomGameOptionsEternalDayDescription = 331,
    MenuCustomGameOptionsTimeFrozen = 332,
    MenuCustomGameOptionsTimeInitial = 333,
    MenuCustomGameOptionsTimeDayLength = 334,
    MenuCustomGameOptionsTimeDayLengthTooltip = 335,
    MenuCustomGameOptionsTimeDayPercent = 336,
    MenuCustomGameOptionsTimeDayPercentTooltip = 337,
    MenuCustomGameOptionsStatStarting = 338,
    MenuCustomGameOptionsStatMax = 339,
    MenuCustomGameOptionsStatStartingDisplay = 340,
    MenuCustomGameOptionsStatMaxDisplay = 341,
    MenuCustomGameOptionsStatNoChange = 342,
    MenuCustomGameOptionsStatBonus = 343,
    MenuCustomGameOptionsStatBonusDisplay = 344,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 345,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 346,
    MenuCustomGameOptionsStatusEffectStartWith = 347,
    MenuCustomGameOptionsStatusEffectUntreatable = 348,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 349,
    MenuCustomGameOptionsSkillInitialRandomCount = 350,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 351,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 352,
    MenuCustomGameOptionsSkillsGlobal = 353,
    MenuCustomGameOptionsSkillNone = 354,
    MenuCustomGameOptionsSkillConfigure = 355,
    MenuCustomGameOptionsSkillInitial = 356,
    MenuCustomGameOptionsSkillMultiplier = 357,
    MenuCustomGameOptionsSkillMultiplierTooltip = 358,
    MenuCustomGameOptionsRandomItems = 359,
    MenuCustomGameOptionsRandomItemsDescription = 360,
    MenuCustomGameOptionsExport = 361,
    MenuCustomGameOptionsImport = 362,
    MenuNewsButtonDiscord = 363,
    MenuNewsButtonFacebook = 364,
    MenuNewsButtonReddit = 365,
    MenuNewsButtonTwitter = 366,
    MenuNewsDescription = 367,
    MenuNewsHeadingSocial = 368,
    MenuNewsTitle = 369,
    MenuNewsHeadingUnableToLoad = 370,
    MenuNewsButtonAllNews = 371,
    MenuOptionsButtonDitherFogOfWar = 372,
    MenuOptionsButtonDisableCustomCursor = 373,
    MenuOptionsButtonFullscreen = 374,
    MenuOptionsButtonDeveloperMode = 375,
    MenuOptionsButtonDeveloperModeContextMenu = 376,
    MenuOptionsButtonPixelFont = 377,
    MenuOptionsButtonReloadGame = 378,
    MenuOptionsButtonExportGlobalSaveData = 379,
    MenuOptionsButtonImportGlobalSaveData = 380,
    MenuOptionsButtonSaveDataClearAll = 381,
    MenuOptionsButtonSaveDataClearCharacters = 382,
    MenuOptionsButtonSaveDataClearHighscores = 383,
    MenuOptionsButtonSaveDataClearMilestones = 384,
    MenuOptionsButtonSaveDataClearOptions = 385,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 386,
    MenuOptionsButtonSaveDataClearSaves = 387,
    MenuOptionsButtonSkipSplash = 388,
    MenuOptionsButtonToggleDevTools = 389,
    MenuOptionsButtonTooltipsCreatures = 390,
    MenuOptionsButtonOpenLogsFolder = 391,
    MenuOptionsButtonTooltipsDoodads = 392,
    MenuOptionsButtonTooltipsItems = 393,
    MenuOptionsButtonTooltipsTerrain = 394,
    MenuOptionsButtonDropLocationFacing = 395,
    MenuOptionsButtonDropLocationFeet = 396,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 397,
    MenuOptionsDescription = 398,
    MenuOptionsHeadingAudio = 399,
    MenuOptionsHeadingDeveloper = 400,
    MenuOptionsHeadingGameplayOptions = 401,
    MenuOptionsHeadingGeneralOptions = 402,
    MenuOptionsHeadingControls = 403,
    MenuOptionsHeadingLanguage = 404,
    MenuOptionsHeadingPowerPreference = 405,
    MenuOptionsHeadingModOptions = 406,
    MenuOptionsHeadingOther = 407,
    MenuOptionsHeadingSaveData = 408,
    MenuOptionsHeadingTooltips = 409,
    MenuOptionsHeadingVideo = 410,
    MenuOptionsLabelInterfaceScale = 411,
    MenuOptionsLabelTooltipDelay = 412,
    MenuOptionsLabelDirectionTurnDelay = 413,
    MenuOptionsLabelMouseTurnDelay = 414,
    MenuOptionsTooltipTurnDelay = 415,
    MenuOptionsTooltipMouseTurnDelay = 416,
    MenuOptionsTooltipUiScaleClamped = 417,
    MenuOptionsTooltipControlsFilter = 418,
    MenuOptionsLabelVolumeEffects = 419,
    MenuOptionsLabelVolumeMusic = 420,
    MenuOptionsTabAudio = 421,
    MenuOptionsTabDeveloper = 422,
    MenuOptionsTabGameplay = 423,
    MenuOptionsTabGeneral = 424,
    MenuOptionsTabControls = 425,
    MenuOptionsTabMods = 426,
    MenuOptionsTabSaveData = 427,
    MenuOptionsTabVideo = 428,
    MenuOptionsTitle = 429,
    MenuOptionsTooltipMusicNextTrack = 430,
    MenuOptionsBindChoose = 431,
    MenuOptionsBindChooseAdd = 432,
    MenuOptionsBindLabelModifier = 433,
    MenuOptionsBindButtonResetTooltip = 434,
    MenuOptionsBindButtonDeleteTooltip = 435,
    MenuOptionsBindButtonAddTooltip = 436,
    MenuOptionsButtonUnlockAllMilestones = 437,
    MenuOptionsButtonUnlockAllCraftingRecipes = 438,
    MenuOptionsButtonAlternatingDirectionMovement = 439,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 440,
    MenuOptionsButtonAlwaysShowMoreInformation = 441,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 442,
    MenuOptionsButtonAutoGatherHarvest = 443,
    MenuOptionsButtonAutoGatherHarvestTooltip = 444,
    MenuOptionsButtonDisableUIEffects = 445,
    MenuOptionsButtonDisableUIEffectsTooltip = 446,
    MenuOptionsButtonAutoAttack = 447,
    MenuOptionsButtonAutoAttackTooltip = 448,
    MenuOptionsButtonAutoPickup = 449,
    MenuOptionsButtonAutoPickupTooltip = 450,
    MenuOptionsButtonDropOnGatherHarvest = 451,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 452,
    MenuOptionsButtonKeepSortActive = 453,
    MenuOptionsButtonKeepSortActiveTooltip = 454,
    MenuOptionsButtonProtectCraftingItemsInInventory = 455,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 456,
    MenuOptionsButtonProtectCraftingItemContainers = 457,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 458,
    MenuOptionsButtonUseAdjacentContainers = 459,
    MenuOptionsButtonUseAdjacentContainersTooltip = 460,
    MenuOptionsButtonHideEquippedHeadgear = 461,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 462,
    MenuOptionsButtonAutoSave = 463,
    MenuOptionsButtonAutoSaveTooltip = 464,
    MenuOptionsRangeAutoSaveTimerLabel = 465,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 466,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 467,
    MenuOptionsButtonWarnOnDangerousActions = 468,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 469,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 470,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 471,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 472,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 473,
    MenuOptionsHeadingWarnWhenBreakingItems = 474,
    MenuOptionsButtonSaveDataClearBindings = 475,
    MenuOptionsTooltipDialogOpacity = 476,
    MenuOptionsLabelDialogOpacity = 477,
    MenuOptionsDeveloperLogSourceFilterHeading = 478,
    MenuOptionsAudioVolumeDisplay = 479,
    MenuOptionsMusicPlaylist = 480,
    MenuOptionsButtonConfigureBindings = 481,
    MenuPauseButtonContinue = 482,
    MenuPauseButtonOptions = 483,
    MenuPauseButtonModes = 484,
    MenuPauseButtonPaused = 485,
    MenuPauseButtonMultiplayer = 486,
    MenuPauseButtonTitleScreen = 487,
    MenuPauseButtonStopServer = 488,
    MenuPauseHeadingPaused = 489,
    MenuPauseParagraphPaused = 490,
    MenuPauseHeadingNotPaused = 491,
    MenuPauseParagraphNotPaused = 492,
    MenuPauseHeadingDedicatedServer = 493,
    MenuPauseParagraphDedicatedServer = 494,
    MenuModesTitle = 495,
    MenuModesDescription = 496,
    MenuMultiplayerOptionsTitle = 497,
    MenuMultiplayerOptionsDescription = 498,
    MenuMultiplayerOptionsOpenServer = 499,
    MenuMultiplayerOptionsOpenServerDescription = 500,
    MenuMultiplayerOptionsCopyGameCode = 501,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 502,
    MenuMultiplayerOptionsInviteSteamFriends = 503,
    MenuMultiplayerOptionsCheckConnectionHeading = 504,
    MenuMultiplayerOptionsCheckConnectionParagraph = 505,
    MenuMultiplayerOptionsCheckConnectionButton = 506,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 507,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 508,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 509,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 510,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 511,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 512,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 513,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 514,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 515,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 516,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 517,
    MenuJoinServerTitle = 518,
    MenuJoinServerDescription = 519,
    MenuJoinServerInputPlaceholder = 520,
    MenuJoinServerNext = 521,
    MenuJoinServerChooseModifiersTitle = 522,
    MenuJoinServerChooseModifiersDescription = 523,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 524,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 525,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 526,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 527,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 528,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 529,
    MenuSharedMultiplayerChoicePVP = 530,
    MenuSharedMultiplayerChoicePVPDescription = 531,
    MenuSharedMultiplayerDescription = 532,
    MenuSharedMultiplayerMaxPlayers = 533,
    MenuSharedRealTimeTickSpeedTooltip = 534,
    MenuSharedRealTimeTickSpeedLabel = 535,
    MenuSharedButtonDefault = 536,
    MenuSharedValueMillseconds = 537,
    MenuSharedValuePercentage = 538,
    MenuSharedMilestonesNotUnlockable = 539,
    MenuSharedMilestonesNotUnlockableDescription = 540,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 541,
    MenuSharedButtonDisableAll = 542,
    MenuSharedButtonEnableAll = 543,
    MenuSharedMilestoneModifiersSelected = 544,
    MiscSortBy = 545,
    MiscSortDirection = 546,
    MiscFilter = 547,
    MiscPlayerNameDefault = 548,
    MiscPlayerNameServer = 549,
    MiscSaveNameDefault = 550,
    MiscSaveNameDailyChallenge = 551,
    MiscSaveNameChallenge = 552,
    MiscSaveVersionUnknown = 553,
    MiscVersion = 554,
    MiscTime = 555,
    MiscTimeMeridiem = 556,
    MiscBindableOr = 557,
    MiscBindableNoBindings = 558,
    DifficultyOptionsPeaceful = 559,
    DifficultyOptionsAberrantSpawnsDisabled = 560,
    DifficultyOptionsAberrantSpawnsOnly = 561,
    DifficultyOptionsCreatureSpawningDisabled = 562,
    DifficultyOptionsCreatureSpawnsDefault = 563,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 564,
    DifficultyOptionsCreatureSpawnsNoAberrants = 565,
    DifficultyOptionsRespawn = 566,
    DifficultyOptionsEternalNight = 567,
    DifficultyOptionsEternalDay = 568,
    DifficultyOptionsTimeInitial = 569,
    DifficultyOptionsTimeFrozen = 570,
    DifficultyOptionsTimeDayLength = 571,
    DifficultyOptionsTimeDayPercent = 572,
    DifficultyOptionsNoItems = 573,
    DifficultyOptionsBenignityInitial = 574,
    DifficultyOptionsBenignityMultiplier = 575,
    DifficultyOptionsMalignityInitial = 576,
    DifficultyOptionsMalignityMultiplier = 577,
    DifficultyOptionsWeightBonus = 578,
    DifficultyOptionsStatInitial = 579,
    DifficultyOptionsStatMax = 580,
    DifficultyOptionsStatMultiplier = 581,
    DifficultyOptionsStatusEffectStartWith = 582,
    DifficultyOptionsStatusEffectUntreatable = 583,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 584,
    DifficultyOptionsNoRandomSkills = 585,
    DifficultyOptionsSkillStartingCount = 586,
    DifficultyOptionsSkillGainMultiplier = 587,
    DifficultyOptionsSkillInitial = 588,
    DifficultyOptionsStatusEffectPermanent = 589,
    DifficultyOptionsStatusEffectRateMultiplier = 590,
    DifficultyOptionsStatusEffectMultiplier = 591,
    EquipmentBack = 592,
    EquipmentBelt = 593,
    EquipmentChest = 594,
    EquipmentFeet = 595,
    EquipmentHands = 596,
    EquipmentHead = 597,
    EquipmentLeftHand = 598,
    EquipmentLeftHandOption = 599,
    EquipmentLegs = 600,
    EquipmentNeck = 601,
    EquipmentRightHand = 602,
    EquipmentRightHandOption = 603,
    EquipmentUse = 604,
    HudFilter = 605,
    QuickSlot1 = 606,
    QuickSlot2 = 607,
    QuickSlot3 = 608,
    QuickSlot4 = 609,
    QuickSlot5 = 610,
    QuickSlot6 = 611,
    QuickSlot7 = 612,
    QuickSlot8 = 613,
    QuickSlot9 = 614,
    TabCrafting = 615,
    TabDismantle = 616,
    Version = 617,
    WindowTitleContainer = 618,
    WindowTitleCrafting = 619,
    WindowTitleEquipment = 620,
    WindowTitleInventory = 621
}
export default UiTranslation;
