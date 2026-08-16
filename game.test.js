import {describe,it,expect} from "vitest";
import {newSeason,act,tick,score} from "./game.js";
describe("tiny farm",()=>{it("runs the crop cycle",()=>{let s=newSeason(20,1); for(const a of ["till","plant","water","water","harvest","sell"]) s=act(s,0,a); expect(s.coins).toBeGreaterThan(0)});it("rejects actions out of order",()=>expect(act(newSeason(),0,"harvest").message).toMatch(/不能/));it("ends when time expires",()=>expect(tick(newSeason(2),3).over).toBe(true));it("scores crops and time",()=>expect(score({...newSeason(20),coins:12,harvested:2})).toBe(212));});
