import React from "react";
export function NewCharacterForm() {

    function LOACharacter(name, loaClass, iLvl, critStat, swiftStat, specStat) {
        this.name = name;
        this.loaClass = loaClass;
        this.iLvl = iLvl;
        this.critStat = critStat;
        this.swiftStat = swiftStat;
        this.specStat = specStat;

        console.log('hello ' + this.name + ' / ' + this.loaClass + ' / ' + this.iLvl + ' / ' + 
        this.critStat + ' / ' + this.swiftStat + ' / ' + this.specStat);
    }

    function onSubmit(e) {
        
    }

    return (
        <>
            <form className="new-char-form">
                <div className="form-row-1">
                    <label htmlForm="character">
                        Character Name:
                    </label>
                    <input type="text" id="charName" maxlength="16" />
                    <label>
                        Class:
                    </label>
                    <select name="gameClass" id="LOAClass">
                        <optgroup label="Warrior">
                            <option value="berserker">Berserker</option>
                            <option value="destroyer">Destroyer</option>
                            <option value="gunlancer">Gunlancer</option>
                            <option value="paladin">Paladin</option>
                            <option value="slayer">Slayer</option>
                        </optgroup>
                        <optgroup label="Mage">
                            <option value="arcanist">Arcanist</option>
                            <option value="bard">Bard</option>
                            <option value="sorceress">Sorceress</option>
                            <option value="summoner">Summoner</option>
                        </optgroup>
                        <optgroup label="Martial Artist">
                            <option value="glavier">Glavier</option>
                            <option value="scrapper">Scrapper</option>
                            <option value="striker">Striker</option>
                            <option value="soulfist">Soulfist</option>
                            <option value="wardancer">Wardancer</option>
                        </optgroup>
                        <optgroup label="Gunner">
                            <option value="artillerist">Artillerist</option>
                            <option value="deadeye">Deadeye</option>
                            <option value="gunslinger">Gunslinger</option>
                            <option value="sharpshooter">Sharpshooter</option>
                        </optgroup>
                        <optgroup label="Assassin">
                            <option value="deathblade">Deathblade</option>
                            <option value="reaper">Reaper</option>
                            <option value="shadowhunter">Shadowhunter</option>
                        </optgroup>
                        <optgroup label="Specialist">
                            <option value="artist">Artist</option>
                        </optgroup>
                    </select>
                </div>
                <div className="form-row-2">
                    <h4>Item Level</h4>
                    <input type="number" id="itemLevel" min="0" max="1650" />
                </div>
                <div className="form-row-3">
                    <h4>Stats</h4>
                    <label>
                        Critical:
                    </label>
                    <input type="number" id="crit" />
                    <label>
                        Swiftness:
                    </label>
                    <input type="number" id="swift" />
                    <label>
                        Specialization:
                    </label>
                    <input type="number" id="spec" />
                </div>
            </form>
        </>
    )
}