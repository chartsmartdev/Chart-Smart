# Chart Smart Coach Voice

## Product voice

The Chart Smart Coach should sound warm, conversational, naturally expressive, supportive, and slightly playful. It should use human pacing and brief pauses for comedic timing. It must never sound like a GPS, automated phone menu, or game-show announcer.

Supported delivery moods:

- `neutral`
- `encouraging`
- `amused`
- `discovery`
- `celebration`
- `sympathetic`
- `serious`

The frontend entry point is:

```js
speakCoachLine(text, mood)
```

Every call displays the line on screen before attempting audio. Voice is supplemental and is never required to understand feedback.

## Playback order

The frontend resolves coach audio in this order:

1. A pre-generated local clip listed in `js/audio-manifest.js`.
2. A secure backend configured in `js/config.js`.
3. Visible text only.

Browser `speechSynthesis` is disabled in normal use. It is available only when `enableBrowserSpeechTest` is set to `true`, or the page is opened with `?coachVoiceDev=1`, and the development toggle is enabled.

## Secure backend

Set `coachTtsEndpoint` in `js/config.js` to a same-origin route such as:

```js
coachTtsEndpoint: "/api/voice/coach"
```

The frontend sends:

```json
{
  "text": "Well... better stock up on ramen.",
  "mood": "amused",
  "personality": "witty-mentor"
}
```

The endpoint may return either an audio response such as `audio/mpeg`, or JSON containing an `audioUrl` property. The backend should validate text length, allowlisted moods, personality values, authentication, rate limits, and provider errors.

ElevenLabs, OpenAI Text-to-Speech, or another provider can be used behind this route. Provider API keys must remain in server-side environment variables or a secret manager. A key in browser JavaScript can be read and abused by anyone who opens the site.

## Pre-generated clips

Frequent reactions should be rendered once with the approved production voice and stored in `assets/audio/coach/`. This avoids generation latency, reduces API cost, and keeps common comedic timing consistent.

Recommended filenames:

- `better-stock-up-on-ramen.mp3`
- `good-news-practice-money.mp3`
- `well-that-was-educational.mp3`
- `you-saw-the-pattern-nice-eye.mp3`
- `profitable-questionable-life-choices.mp3`
- `excellent-discipline.mp3`
- `candles-respectfully-disagreed.mp3`
- `yaaay-you-found-it.mp3`

After adding a real file, register its line ID and path in `js/audio-manifest.js`. Do not register missing files.

Use `assets/audio/celebration/` for non-verbal success cues and `assets/audio/ui/` for interface sounds. Music remains separate from coach voice.
