import s from "./Bug.module.css";
export default function Bug() {
    return (
        <div className={`${s.scene}`}>
            <div className={`${s.bug}`}>
                <div className={`${s.face} ${s.head}`}>
                    <div className={s.antenna}>
                        <div className={s.antennaLeft} />
                        <div className={s.antennaRight} />
                    </div>
                </div>
                <div className={`${s.face} ${s.body}`}>
                    <div className={s.mainRoundedBody} >
                        <div className={s.spot} />
                        <div className={s.spot} />
                        <div className={s.spot} />
                        <div className={s.spot} />
                        <div className={s.spot} />
                        <div className={s.spot} />
                        <div className={s.line} />
                    </div>
                    <div className={s.legGroup1}>
                        <div className={s.legLeft} />
                        <div className={s.legRight} />
                    </div>
                    <div className={s.legGroup2}>
                        <div className={s.legLeft} />
                        <div className={s.legRight} />
                    </div>
                    <div className={s.legGroup3}>
                        <div className={s.legLeft} />
                        <div className={s.legRight} />
                    </div>
                </div>
            </div>

        </div>
    );
}