/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Quest, RequirementInstance } from "entity/player/quest/quest/Quest";
import { QuestInstance } from "entity/player/quest/QuestManager";
import { IQuestRequirement } from "entity/player/quest/requirement/IRequirement";
export default class Challenge extends Quest {
    static getCreaturesOfRequirements(): import("@wayward/goodstream/Stream").default<any>;
    private static readonly possibleRequirements;
    /**
     * These are the only items that can be requested to collect
     */
    private static readonly itemCollectWhitelist;
    /**
     * These are the only skills that can be requested to learn
     */
    private static readonly skillLearnWhitelist;
    /**
     * These creatures will always be excluded from the possible creatures to be requested to kill, even if they're spawnable
     */
    private static readonly creatureKillBlacklist;
    /**
     * These creatures will always be excluded from the possible creatures to be requested to tame, even if they're spawnable
     *
     * Creatures that can't be tamed will already be excluded by default
     */
    private static readonly creatureTameBlacklist;
    private readonly existingRequirements;
    private readonly possibleRequirements;
    constructor();
    protected createRequirements(): import("@wayward/goodstream/Stream").default<IQuestRequirement<any[], {}>>;
    protected onUpdate(quest: QuestInstance): void;
    protected onRequirementComplete(quest: QuestInstance, completedRequirement: RequirementInstance): void;
    private createRandomRequirement;
    private getSpawnableCreatures;
}
