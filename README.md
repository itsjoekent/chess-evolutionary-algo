# chess-evolutionary-algo

♟️ An evolutionary algorithm to help me learn how to play chess better.

## Abstract

Neural networks are the most popular method for developing modern chess bots. [Stockfish](<https://en.wikipedia.org/wiki/Stockfish_(chess)>) and [AlphaZero](https://en.wikipedia.org/wiki/AlphaZero), some of the strongest chess bots currently known, rely on [neural networks](https://en.wikipedia.org/wiki/Neural_network) and the [Monte Carlo search tree](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search). The problem with this approach is I can't reverse engineer why the computer made a particular move. These AI systems are a "[black box](https://umdearborn.edu/news/ais-mysterious-black-box-problem-explained)".

By contrast, [evolutionary algorithms](https://en.wikipedia.org/wiki/Evolutionary_algorithm) can generate an output we can more easily reverse engineer or visualize. In the case of this specific project, I'm evolving a mathematical equation which evaluates what chess move to make.

While evolutionary algorithms are different from neural networks in a number of important aspects, evolutionary algorithms still rely on the concept of "training" the computer to search a problem space for an optimal solution.

To get a deeper insight on how this process has been implemented, see [`SPEC.txt`](./SPEC.txt).

## Local Development

## Running In The Cloud

## License & Contributing

notes
--> run each game in a thread
--> run stockfish in wasm
--> use a cache for re-using variable calculations

todo

- promotion variable / handle promotions (always queen?)
