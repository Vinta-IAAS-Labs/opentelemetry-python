window.BENCHMARK_DATA = {
  "lastUpdate": 1607896083795,
  "repoUrl": "https://github.com/Vinta-IAAS-Labs/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.7 -": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f1f13f96742284ba3e86f413148e80fe4988686",
          "message": "Use gh-pages to save performance benchmarks results (#1469)",
          "timestamp": "2020-12-13T12:05:16-08:00",
          "tree_id": "5bd658914eea3e94fa977897bf34fa99db03fd90",
          "url": "https://github.com/Vinta-IAAS-Labs/opentelemetry-python/commit/2f1f13f96742284ba3e86f413148e80fe4988686"
        },
        "date": 1607896055493,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26225.955072437337,
            "unit": "iter/sec",
            "range": "stddev: 0.000004794299147200131",
            "extra": "mean: 38.13016522136 usec\nrounds: 4497"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20200.491140695958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016945571184402555",
            "extra": "mean: 49.503746866104535 usec\nrounds: 7419"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 -": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f1f13f96742284ba3e86f413148e80fe4988686",
          "message": "Use gh-pages to save performance benchmarks results (#1469)",
          "timestamp": "2020-12-13T12:05:16-08:00",
          "tree_id": "5bd658914eea3e94fa977897bf34fa99db03fd90",
          "url": "https://github.com/Vinta-IAAS-Labs/opentelemetry-python/commit/2f1f13f96742284ba3e86f413148e80fe4988686"
        },
        "date": 1607896082934,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15353.030875863673,
            "unit": "iter/sec",
            "range": "stddev: 0.000018317980910601223",
            "extra": "mean: 65.13371907380768 usec\nrounds: 1641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10707.580643982734,
            "unit": "iter/sec",
            "range": "stddev: 0.000026809933876325867",
            "extra": "mean: 93.39177852113244 usec\nrounds: 5531"
          }
        ]
      }
    ]
  }
}