export const data = [
  {
    question: (
      <span>
        Good morning! Here's your coding interview problem for today. This
        problem was recently asked by Google.
        <br /> Given a list of numbers and a number k, return whether any two
        numbers from the list add up to k.
        <br /> For example, given [10, 15, 3, 7] and k of 17, return true since
        10 + 7 is 17. Bonus: Can you do this in one pass?
      </span>
    ),

    result: (a = [10, 15, 3, 7], k = 24) => {
      if (a && a.length && typeof k !== "number") {
        return "none";
      }

      for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
          if (a[i] + a[j] === k) return `[${a[i]},${a[j]}]`;
        }
      }

      return "none";
    },
  },

  {
    question: (
      <span>
        Good morning! Here's your coding interview problem for today.
        <br />
        This problem was asked by Facebook.
        <br />
        Given a string of round, curly, and square open and closing brackets,
        return whether the brackets are balanced (well-formed).
        <br />
        For example, given the string "([])[]({})", you should return true.
        <br />
        Given the string "([)]" or "((()", you should return false.
      </span>
    ),
    result: (string = "([])[]({}") => {
      let mustHaveChars = "";
      const closeChar = (c) => {
        switch (c) {
          case "{":
            return "}";
          case "(":
            return ")";
          case "[":
            return "]";

          default:
            break;
        }
      };

      for (let i = 0; i < string.length; i++) {
        const curChar = string[i];

        if (["{", "[", "("].includes(curChar)) {
          mustHaveChars = closeChar(curChar) + mustHaveChars;
        } else if (curChar === mustHaveChars[0]) {
          mustHaveChars = mustHaveChars.slice(1, mustHaveChars.length);
        } else {
          return "FALSE: " + string;
        }
      }

      if (mustHaveChars.length) return "FALSE: " + string;

      return "TRUE: " + string;
    },
  },

  {
    question: (
      <span>
        Good morning! Here's your coding interview problem for today.
        <br />
        This problem was asked by Amazon.
        <br />
        Run-length encoding is a fast and simple method of encoding strings. The
        basic idea is to represent repeated successive characters as a single
        count and character. For example, the string "AAAABBBCCDAA" would be
        encoded as "4A3B2C1D2A".
        <br />
        Implement run-length encoding and decoding. You can assume the string to
        be encoded have no digits and consists solely of alphabetic characters.
        You can assume the string to be decoded is valid.
      </span>
    ),

    result: (code = "4A3B2C1D2A") => {
      if (typeof code !== "string") return "invalid";
      const action = /\b[A-Za-z]+\b/.test(code)
        ? "ENCODE"
        : /\b(\d[A-Za-z])+\b/.test(code)
        ? "DECODE"
        : "invalid";

      let result = "";

      switch (action) {
        case "ENCODE":
          let count = 1;

          for (let i = 1; i < code.length; i++) {
            const curChar = code[i];
            console.log("curChar", i, curChar);
            const prevChar = code[i - 1];
            if (curChar === prevChar) {
              count += 1;

              if (i === code.length - 1) {
                result += count + prevChar;
              }
            } else {
              result += count + prevChar;
              count = 1;
            }
          }

          return action + ": " + result;

        case "DECODE":
          let slicedCode = code;
          while (slicedCode.length) {
            const loopTime = slicedCode.match(/\d+/);

            console.log("loopTime", result, loopTime);

            if (!loopTime || !loopTime[0]) break;

            const curChar = slicedCode[loopTime[0].length];
            for (let index = 0; index < parseInt(loopTime); index++) {
              result += curChar;
            }

            slicedCode = slicedCode.slice(2, slicedCode.length);
          }
          return action + ": " + result;

        default:
          return action;
      }
    },
  },
  {
    question: (
      <span>
        Good morning! Here's your coding interview problem for today.
        <br />
        This problem was asked by Google.
        <br />
        The edit distance between two strings refers to the minimum number of
        character insertions, deletions, and substitutions required to change
        one string to the other. For example, the edit distance between “kitten”
        and “sitting” is three: substitute the “k” for “s”, substitute the “e”
        for “i”, and append a “g”.
        <br />
        Given two strings, compute the edit distance between them.
      </span>
    ),

    result: (stringA = "sitting", stringB = "kitten") => {
      if (typeof stringA !== "string" || typeof stringB !== "string")
        return "INVALID";

      let result = "",
        count = 0;

      for (let i = 0; i <= stringA.length; i++) {
        const curAChar = stringA[i];
        const curBChar = stringB[i];

        console.log("newBchar__", curAChar, curBChar);

        if (curAChar === curBChar) continue;

        // A < B
        if (!curAChar && curBChar) {
          for (let j = i; j < stringB.length; j++) {
            const newBChar = stringB[j];

            console.log("newBchar", newBChar);

            if (!newBChar) break;

            result += `-- append a "${newBChar}"`;
            ++count;
          }
        }
        // A > B
        else if (!curBChar && curAChar) {
          result += `-- delete a "${curAChar}"`;
          ++count;
        } else {
          result += `-- substitute the "${curAChar}" for "${curBChar}"`;
          ++count;
        }
      }

      return `Edit distance between "${stringA}" and "${stringB}" is ${count}: ${result.slice(
        2,
        result.length
      )}`;
    },
  },
  {
    question: (
      <span>
        Good morning! Here's your coding interview problem for today.
        <br />
        This problem was asked by Microsoft.
        <br />
        Compute the running median of a sequence of numbers. That is, given a
        stream of numbers, print out the median of the list so far on each new
        element.
        <br />
        Recall that the median of an even-numbered list is the average of the
        two middle numbers.
        <br />
        For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm
        should print out: 
            "2
            1.5
            2
            3.5
            2
            2
            2"
      </span>
    ),
    result: ()=>{

    }
  },
];
