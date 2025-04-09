import {formatCurrency} from "../scripts/utils/money.js";

describe('test suite: format Currency', ()=>{
    it('converts cents int dolars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works for 0', ()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('round up to nearest cent', ()=>{
        expect(formatCurrency(2095.4)).toEqual('20.95');
    })
});
