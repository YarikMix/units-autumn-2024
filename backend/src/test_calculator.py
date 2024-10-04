import unittest
import math
from src.calculator import Calculator


class TestCalculator(unittest.TestCase):

    def setUp(self):
        self.calculator = Calculator()

    def test_add_ints(self):
        self.assertEqual(self.calculator.addition(1, 2), 3)

    def test_add_floats(self):
        self.assertAlmostEqual(self.calculator.addition(0.1, 0.2), 0.3)

    def test_add_int_float(self):
        self.assertAlmostEqual(self.calculator.addition(1, 0.1), 1.1)

    def test_add_int_string(self):
        self.assertRaises(TypeError, self.calculator.addition, 1, 'a')

    def test_sub_int(self):
        self.assertEqual(self.calculator.subtraction(3, 2), 1)

    def test_sub_floats(self):
        self.assertAlmostEqual(self.calculator.subtraction(0.3, 0.2), 0.1)

    def test_sub_float_int(self):
        self.assertAlmostEqual(self.calculator.subtraction(1, 0.1), 0.9)

    def test_sub_int_string(self):
        self.assertRaises(TypeError, self.calculator.subtraction, 1, "0.1")

    def test_mul_int(self):
        self.assertEqual(self.calculator.multiplication(2, 3), 6)

    def test_mul_int_float(self):
        self.assertAlmostEqual(self.calculator.multiplication(12, 0.1), 1.2)

    def test_mul_negatives(self):
        self.assertEqual(self.calculator.multiplication(-1, -2), 2)

    def test_div_ints(self):
        self.assertEqual(self.calculator.division(25, 5), 5)

    def test_div_floats(self):
        self.assertAlmostEqual(self.calculator.division(0.2, 0.1), 2.0)

    def test_div_by_zero(self):
        self.assertIsNone(self.calculator.division(12, 0))

    def test_div_negatives(self):
        self.assertEqual(self.calculator.division(-2, -1), 2)

    def test_abs_positive(self):
        self.assertEqual(self.calculator.absolute(1), 1)

    def test_abs_negative(self):
        self.assertEqual(self.calculator.absolute(-1), 1)

    def test_abs_eq_pos_neg(self):
        self.assertEqual(self.calculator.absolute(1), self.calculator.absolute(-1))

    def test_degree_ints(self):
        self.assertEqual(self.calculator.degree(2, 2), 4)

    def test_degree_int_float(self):
        self.assertAlmostEqual(self.calculator.degree(25, 0.5), 5.0)

    def test_degree_int_zero(self):
        self.assertEqual(self.calculator.degree(25, 0), 1)

    def test_degree_int_negative(self):
        self.assertAlmostEqual(self.calculator.degree(2, -1), 0.5)

    def test_degree_zero_zero(self):
        self.assertEqual(self.calculator.degree(0, 0), 1)

    def test_degree_negative_even_degree(self):
        self.assertEqual(self.calculator.degree(-1, 2), 1)

    def test_ln_e_degree(self):
        self.assertAlmostEqual(self.calculator.ln(math.e ** 5), 5.0)

    def test_ln_one(self):
        self.assertAlmostEqual(self.calculator.ln(1), 0.0)

    def test_ln_negative(self):
        self.assertRaises(ValueError, self.calculator.ln, -1)

    def test_ln_zero(self):
        self.assertRaises(ValueError, self.calculator.ln, 0)

    def test_ln_string(self):
        self.assertRaises(TypeError, self.calculator.ln, 'a')

    def test_ln_none(self):
        self.assertRaises(TypeError, self.calculator.ln, None)

    def test_log_perfect_dergree(self):
        self.assertAlmostEqual(self.calculator.log(8, 2), 3.0)

    def test_log_one(self):
        self.assertAlmostEqual(self.calculator.log(1, 5), 0.0)

    def test_log_negative_1(self):
        self.assertRaises(ValueError, self.calculator.log, 3, -10)

    def test_log_negative_2(self):
        self.assertRaises(ValueError, self.calculator.log, -10, 3)

    def test_log_base_zero(self):
        self.assertRaises(ValueError, self.calculator.log, 2, 0)

    def test_log_base_one(self):
        self.assertRaises(ZeroDivisionError, self.calculator.log, 2, 1)

    def test_log_string(self):
        self.assertRaises(TypeError, self.calculator.log, 'a', 'a')

    def test_log_none(self):
        self.assertRaises(TypeError, self.calculator.log, None, None)

    def test_sqrt_int_perfect_square(self):
        self.assertAlmostEqual(self.calculator.sqrt(25), 5.0)

    def test_sqrt_float_perfect_square(self):
        self.assertAlmostEqual(self.calculator.sqrt(0.25), 0.5)

    def test_sqrt_int_negative(self):
        self.assertAlmostEqual(self.calculator.sqrt(-9), 3j)

    def test_sqrt_one(self):
        self.assertAlmostEqual(self.calculator.sqrt(1), 1)

    def test_sqrt_zero(self):
        self.assertAlmostEqual(self.calculator.sqrt(0), 0)

    def test_nth_root_int_perfect_degree(self):
        self.assertAlmostEqual(self.calculator.nth_root(8, 3), 2.0)

    def test_nth_root_1(self):
        self.assertAlmostEqual(self.calculator.nth_root(1, 3), 1.0)

    def test_nth_root_int_perfect_degree(self):
        self.assertAlmostEqual(self.calculator.nth_root(0, 3), 0.0)

    def test_nth_root_lists(self):
        self.assertRaises(TypeError, self.calculator.nth_root, [1, 2], [3, 4])

    def test_nth_root_tuples(self):
        self.assertRaises(TypeError, self.calculator.nth_root, (1, 2), (3, 4))

    def test_nth_root_sets(self):
        self.assertRaises(TypeError, self.calculator.nth_root, {1, 2}, {3, 4})

    def test_nth_root_dicts(self):
        self.assertRaises(TypeError, self.calculator.nth_root, {'a': 1}, {'b': 2})


if __name__ == "__main__":
    unittest.main()