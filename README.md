# Chart Smart

Chart Smart is an educational investing practice experience built around deliberate decisions, structured feedback, and disciplined risk.

**Financial IQ. Not Financial Advice.**

**The market rewards outcomes. Chart Smart rewards decisions.**

## Current Demo

Decision Lab v0.1 is the first playable Chart Smart scenario. It presents one anonymous, historical-style candlestick chart and asks the learner to:

- Read the trend before considering a trade
- Identify one or more chart patterns
- Record confidence without seeing the future
- Choose Buy, Sell, Wait, or Skip
- Define a complete risk plan or explain why no trade is appropriate
- Lock the decision before future candles appear
- Watch price and volume replay candle by candle
- Compare the market outcome with a separate decision-quality grade
- Review a Market Vision score for trend, pattern, level, and confirmation awareness
- Inspect every visible candle with a snapped crosshair, right-side price label, time label, and OHLCV readout
- Choose Relaxed, Standard, or Challenge planning time without automatic submission
- Control procedural focus music, feedback effects, and conservative master volume separately
- Optionally sketch two simple chart guides before the lesson reveal
- Open Pattern X-Ray to see why the scenario qualifies as a Bull Flag

The demo includes responsive layouts, keyboard-friendly controls, reduced-motion support, saved audio preferences, procedural focus music, and browser-generated learning sounds. No audio files or external services are required.

## Project Structure

```text
Chart-Smart/
|-- index.html
|-- css/
|   `-- styles.css
|-- js/
|   `-- main.js
|-- README.md
|-- VISION.md
|-- PRINCIPLES.md
|-- EXPERIENCE.md
|-- IDEAS.md
`-- ROADMAP.md
```

`EXPERIENCE.md` is the emotional-design standard for future Chart Smart work. Every feature should teach, explain, and reward disciplined thinking without borrowing the emotional language of gambling.

## Preview

Open `index.html` in a modern browser. The project is fully static and does not require a build step.

To serve it locally, run this from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

The demo uses relative paths and is compatible with GitHub Pages from the repository root.

1. Push the files to `main`.
2. Open the repository's **Settings**, then **Pages**.
3. Deploy from the `main` branch and repository root.

## Educational Disclaimer

Chart Smart is for education and practice only. It does not provide financial advice, investment recommendations, guaranteed returns, or instructions to buy or sell securities. A score, replay, or coaching message should never be treated as personalized financial advice.

## Next Product Work

- Add a small reviewed scenario library
- Calibrate scoring against expert-defined rubrics
- Add click-and-drag chart placement for entry, stop, and target
- Test comprehension and replay pacing with learners
- Add persistent practice history and skill progression
- Expand Pattern X-Ray to additional market structures
